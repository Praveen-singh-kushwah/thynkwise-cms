'use strict';

const { page, questions } = require('../data/personality-assessment.json');

const PAGE_UID = 'api::personality-page.personality-page';
const QUESTION_UID = 'api::personality-question.personality-question';

async function upsertPersonalityPage() {
  const existingPages = await strapi.documents(PAGE_UID).findMany({
    fields: ['documentId'],
    limit: 1,
  });

  const existingPage = Array.isArray(existingPages) ? existingPages[0] : existingPages;

  if (existingPage?.documentId) {
    await strapi.documents(PAGE_UID).update({
      documentId: existingPage.documentId,
      data: page,
      status: 'published',
    });
    return 'updated';
  }

  await strapi.documents(PAGE_UID).create({
    data: page,
    status: 'published',
  });

  return 'created';
}

async function replacePersonalityQuestions() {
  const existingQuestions = await strapi.documents(QUESTION_UID).findMany({
    fields: ['documentId'],
    pagination: { pageSize: 1000 },
  });

  for (const question of existingQuestions) {
    await strapi.documents(QUESTION_UID).delete({
      documentId: question.documentId,
    });
  }

  for (const question of questions) {
    await strapi.documents(QUESTION_UID).create({
      data: question,
      status: 'published',
    });
  }

  return {
    deleted: existingQuestions.length,
    created: questions.length,
  };
}

async function seedPersonalityAssessment() {
  const pageStatus = await upsertPersonalityPage();
  const questionStatus = await replacePersonalityQuestions();

  console.log(`Personality page ${pageStatus}.`);
  console.log(
    `Personality questions refreshed. Deleted ${questionStatus.deleted}, created ${questionStatus.created}.`
  );
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  try {
    await seedPersonalityAssessment();
  } finally {
    await app.destroy();
  }

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
