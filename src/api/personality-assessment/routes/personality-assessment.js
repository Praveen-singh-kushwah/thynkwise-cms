'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/personality-assessment/page',
      handler: 'personality-assessment.page',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/personality-assessment/questions',
      handler: 'personality-assessment.questions',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/personality-assessment/inquiries',
      handler: 'personality-assessment.createInquiry',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/personality-assessment/results',
      handler: 'personality-assessment.submitResult',
      config: {
        auth: false,
      },
    }
  ],
};
