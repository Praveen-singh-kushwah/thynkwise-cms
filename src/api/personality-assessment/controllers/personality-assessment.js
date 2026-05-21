'use strict';

const pageUid = 'api::personality-page.personality-page';
const questionUid = 'api::personality-question.personality-question';
const submissionUid = 'api::personality-submission.personality-submission';

const formatPage = (page) => ({
  pageTitle: page?.pageTitle || 'GEM Personality Assessment',
  introText: page?.introText || '',
  formHeading: page?.formHeading || 'Start Your Assessment',
  quizTip:
    page?.quizTip ||
    "Tip: Don't pick what sounds ideal. Choose the first answer that feels true. What would you actually do, not what you think you should do?",
  resultHeading: page?.resultHeading || 'Your GEM Personality Result',
  submitButtonText: page?.submitButtonText || 'Submit',
  retakeButtonText: page?.retakeButtonText || 'Retake Quiz',
  seo: page?.seo || null,
});

const formatQuestion = (question) => ({
  question_id: String(question.documentId || question.id),
  question: question.question,
  answers: (question.answers || [])
    .slice()
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map((answer) => ({
      answer_id: String(answer.id),
      answer: answer.answerText,
      gemType: answer.gemType,
    })),
});

module.exports = {
  async page(ctx) {
    const pages = await strapi.documents(pageUid).findMany({
      populate: {
        seo: {
          populate: ['ogImage'],
        },
      },
      status: 'published',
      limit: 1,
    });
    const page = pages?.[0];

    ctx.body = {
      status: true,
      data: formatPage(page),
    };
  },

  async questions(ctx) {
    const questions = await strapi.documents(questionUid).findMany({
      populate: {
        answers: true,
      },
      sort: [{ order: 'asc' }],
      status: 'published',
    });

    ctx.body = {
      status: true,
      data: questions.map(formatQuestion),
    };
  },

  async createInquiry(ctx) {
    const body = ctx.request.body || {};
    const data = body.data || body;

    if (!data.name || !data.email) {
      ctx.status = 400;
      ctx.body = {
        status: false,
        msg: 'Name and email are required.',
      };
      return;
    }

    const submission = await strapi.documents(submissionUid).create({
      data: {
        name: data.name,
        companyName: data.company_name || data.companyName || '',
        email: data.email,
        phone: data.phone || '',
        hasSubmittedQuestions: false,
        submittedAt: new Date(),
      },
    });

    ctx.body = {
      status: true,
      msg: 'Form submitted successfully.',
      data: {
        id: submission.documentId || submission.id,
      },
    };
  },

  async submitResult(ctx) {
    const body = ctx.request.body || {};
    const data = body.data || body;
    const userId = data.user_id || data.userId || data.submissionId;

    if (!userId) {
      ctx.status = 400;
      ctx.body = {
        status: false,
        msg: 'Submission id is required.',
      };
      return;
    }

    const results = data.results || {};
    const answers = data.answers || null;
    const totalQuestions =
      data.totalQuestions ||
      Object.values(results).reduce((total, value) => total + Number(value || 0), 0);

    await strapi.documents(submissionUid).update({
      documentId: userId,
      data: {
        hasSubmittedQuestions: true,
        quizSubmittedAt: new Date(),
        dominantGem: data.category || data.dominantGem || '',
        sapphireScore: Number(results.Sapphire || 0),
        rubyScore: Number(results.Ruby || 0),
        pearlScore: Number(results.Pearl || 0),
        emeraldScore: Number(results.Emerald || 0),
        totalQuestions,
        answers,
      },
    });

    ctx.body = {
      status: true,
      msg: 'Quiz result saved successfully.',
    };
  },
};
