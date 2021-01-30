export default {
  _key: '3333',
  publishedTS: '2020-01-19T11:09:20.498Z',
  generalities: {
    languages: ['en'],
    title: {
      en: 'AAMOS-00 phase 1'
    },
    shortDescription: {
      en: 'Mobile device monitoring to inform prediction of asthma attacks: an observational study (phase 1)'
    },
    longDescription: {
      en: `The aim of this study is to collect these two sets of data from about 30 people for 6 months.

      We’ll use the findings to develop a method that can accurately predict an asthma attack smart devices and symptom diaries. In the future this could be used in a connected asthma system to help people look after their asthma and avoid troublesome attacks.`
    },
    startDate: '2021-03-01',
    endDate: '2021-03-30',
    principalInvestigators: [
      {
        name: 'Kevin Tsang',
        contact: 'kevin@ed.com',
        institution: 'University of Edinburgh'
      },
      {
        name: 'Ahmar Shah',
        contact: 'ahmar@ed.com',
        institution: 'University of Edinburgh'
      }
    ],
    institutions: [
      {
        name: 'University of Edinburgh',
        contact: 'Usher Institute',
        dataAccess: 'full',
        reasonForDataAccess: {
          en: 'Full access needed for data analysis.'
        }
      },
      {
        name: 'University of East Anglia',
        contact: 'UEA',
        dataAccess: 'no'
      }
    ]
  },
  inclusionCriteria: {
    minAge: 18,
    maxAge: 100,
    sex: [
      'male',
      'female',
      'other'
    ],
    lifestyle: {
      active: 'notrequired',
      smoker: 'notrequired'
    },
    criteriaQuestions: [
      {
        title: {
          en: 'Do you have Asthma?'
        },
        answer: 'yes'
      },
      {
        title: {
          en: 'Have you needed at least one course of oral steroids (prednisolone) for an asthma attack in the past 12 months?'
        },
        answer: 'yes'
      }
    ],
    diseases: [ { name: 'Asthma', conceptId: '321321321' } ],
    medications: []
  },
  tasks: [
    {
      id: 1,
      type: 'form',
      scheduling: {
        startEvent: 'consent',
        intervalType: 'w',
        untilSecs: 2592000, // 1 month
        interval: 1,
        months: [],
        monthDays: [],
        weekDays: []
      },
      formKey: '3333',
      formName: {
        en: 'Asthma Control Questionnaire'
      }
    },
    {
      id: 2,
      type: 'dataQuery',
      scheduling: {
        startEvent: 'consent',
        intervalType: 'd',
        interval: 1,
        occurrences: 20,
        months: [],
        monthDays: [],
        weekDays: []
      },
      dataType: 'steps',
      aggregated: true,
      bucket: 'hour'
    },
    {
      id: 3,
      type: 'smwt',
      scheduling: {
        startEvent: 'consent',
        intervalType: 'd',
        interval: 7,
        months: [],
        monthDays: [],
        weekDays: []
      },
      dataType: 'distance'
    },
    {
      id: 4,
      type: 'qcst',
      scheduling: {
        startEvent: 'consent',
        intervalType: 'd',
        interval: 7,
        months: [],
        monthDays: [],
        weekDays: []
      },
      dataType: 'steps'
    }
  ],
  consent: {
    invitation: {
      en: 'We are inviting you to participate in the '
    },
    privacyPolicy: {
      en: 'We will take care of your data, trust us.'
    },
    taskItems: [
      {
        description: {
          en: 'I agree to answer the ACQ every week.'
        },
        taskId: 1
      },
      {
        description: {
          en: 'I agree to send my data about steps, every day.',
          sv: 'Jag accepterar att skicka min information om steg varje dag'
        },
        taskId: 2
      },
      {
        description: {
          en: 'I agree to perform the Six Minute Walk Test once a week.',
          sv: 'Jag accepterar att utföra Six Minute Walk Test en gång i veckan.'
        },
        taskId: 3
      },
      {
        description: {
          en: 'I agree to perform the Queen\'s College Step Test once a week.',
          sv: 'Jag accepterar att utföra Queen\'s College Step Test en gång i veckan.'
        },
        taskId: 4
      },
      {
        description: {
          en: 'I agree to perform the Asthma Control Questionnaire once a week.',
          sv: 'Jag accepterar att utföra Asthma Control Questionnaire en gång i veckan.'
        },
        taskId: 5
      }
    ],
    extraItems: []
  }
}