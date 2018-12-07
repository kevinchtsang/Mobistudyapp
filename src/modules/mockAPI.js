// Logging in
export async function login (email, password) {
  if (email !== 'jameson@test.test' || password !== '12345678') {
    let enahncedError = new Error('bad credentials')
    enahncedError.response = { status: 401 }
    throw enahncedError
  }
  console.log('API- Logging in')
  return {
    _key: '1231232',
    email: 'jameson.lee@worc.ox.ac.uk',
    token: 'asdasdasdasdasd'
  }
}

// Registration
export async function registerUser (email, password) {
  console.log('API- Registering user')
  return true
}

// Create the participant profile
export async function createProfile (profile) {
  console.log('API- Profile created', profile)
  return true
}

// Updating details
export async function updateProfile (profile) {
  console.log('API- Profile updated', profile)
  return true
}

// Password reset
export function resetPW (email) {
  return Promise.resolve(true)
}

// Change password
export function changePW (userKey, oldpw, newpw) {
  // Make api call here and branch depending on result
  if (oldpw !== 'correct') {
    return Promise.resolve(false) // Old password does not match
  } else {
    return Promise.resolve(true) // New password updated correctly
  }
}

export function setToken (token) {
  console.log('Setting token: ' + token)
}

export function unsetToken () {
  console.log('Unsetting token')
}

export function getQuestionnaire (key) {
  return new Promise(function (resolve, reject) {
    if (key === '123456') {
      setTimeout(function () {
        resolve({
          'created': '2018-10-25T10:09:53.222Z',
          'name': 'My cool form',
          'description': 'a short form',
          'questions': [{
            'id': 'Q1',
            'type': 'singleChoice',
            'text': 'What do you prefer?',
            'helper': 'Some details here',
            'nextDefaultId': 'Q2',
            'answerChoices': [{
              'id': '1',
              'text': 'Red',
              'nextQuestionId': 'Q2'
            }, {
              'id': '2',
              'text': 'Green',
              'nextQuestionId': 'Q3'
            }]
          }, {
            'id': 'Q2',
            'type': 'multipleChoice',
            'text': 'Best options',
            'helper': 'Some details here',
            'nextDefaultId': 'Q3',
            'answerChoices': [{
              'id': 'Q2A1',
              'text': 'A'
            }, {
              'id': 'Q2A2',
              'text': 'B'
            }]
          }, {
            'id': 'Q3',
            'type': 'freetext',
            'text': 'Type some freetext here',
            'helper': 'freetext',
            'nextDefaultId': 'ENDFORM'
          }]
        })
      }, Math.floor(Math.random() * 5000))
    } else if (key === '1234') {
      setTimeout(function () {
        resolve({
          'name': 'COPD Form',
          'description': 'Form for COPD Patients',
          'questions': [
            {
              'id': 'Q1',
              'text': 'Are you ready for this test?',
              'helper': 'Do you want to continue?',
              'type': 'singleChoice',
              'answerChoices': [
                {
                  'id': 'Q1A1',
                  'text': 'Yes',
                  'nextQuestionId': 'Q2'
                },
                {
                  'id': 'Q1A2',
                  'text': 'NO',
                  'nextQuestionId': 'Q3'
                }
              ]
            },
            {
              'id': 'Q2',
              'text': 'Fill in description.',
              'type': 'freetext',
              'nextDefaultId': 'ENDFORM',
              'answerChoices': [
                {
                  'id': 'Q2A1'
                }
              ]
            },
            {
              'id': 'Q3',
              'text': 'Ice Cream?',
              'type': 'singleChoice',
              'answerChoices': [
                {
                  'id': 'Q3A1',
                  'text': 'YES',
                  'nextQuestionId': 'ENDFORM'
                },
                {
                  'id': 'Q3A2',
                  'text': 'NO',
                  'nextQuestionId': 'ENDFORM'
                }
              ]
            }
          ],
          'created': '2018-11-09T10:49:50.473Z'
        })
      }, Math.floor(Math.random() * 2000))
    } else {
      reject(new Error('Questionnaire not found'))
    }
  })
}

export function getUserStudies (userKey) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(
        [{'key': '1234', 'start': '2018-12-03T15:45:04Z', 'config': {'published': '2018-11-09T11:09:20.498Z', 'generalities': {'title': 'COPD Study', 'description': "It's a study", 'startDate': '2018-11-10T00:00:00.000+00:00', 'endDate': '2019-05-24T00:00:00.000+01:00', 'principalInvestigators': [{'name': 'J Lee', 'contact': 'IBME Oxford', 'institution': 'University of Oxford'}, {'name': 'C Velardo', 'contact': 'IBME Oxford', 'institution': 'University of Oxford'}], 'institutions': [{'name': 'University of Oxford, IBME', 'contact': 'Old Road Campus', 'dataAccess': 'full'}, {'name': 'University of Oxford, Worcester', 'contact': 'Worcester College', 'dataAccess': 'full'}]}, 'inclusionCriteria': {'minAge': 18, 'maxAge': 100, 'gender': ['male', 'female', 'other'], 'lifestyle': {'active': 'notrequired', 'smoker': 'notrequired'}, 'criteriaQuestions': [{'title': 'Are you a smoker?', 'answer': 'no'}], 'diseases': {'Acute exacerbation of COPD': '195951007'}, 'medications': {}}, 'tasks': [{'id': 1, 'type': 'form', 'scheduling': {'startEvent': 'consent', 'startDelaySecs': 432000, 'untilSecs': 1036800, 'intervalType': 'd', 'months': [], 'monthDays': [], 'weekDays': [], 'interval': 1}, 'formKey': '1277660', 'formName': 'COPD Form'}, {'id': 2, 'type': 'dataQuery', 'scheduling': {'startEvent': 'consent', 'intervalType': 'd', 'interval': 1, 'months': [], 'monthDays': [], 'weekDays': []}, 'dataType': 'steps', 'aggregated': true, 'bucket': 'day'}], 'consent': {'invitation': 'Something something consent', 'privacyPolicy': 'Something something consent', 'taskItems': [{'description': 'You agree to answer the "COPD Form" form. 5 days after you have consented. Until 12 days after you have consented. Repeated daily.', 'taskId': 1}, {'description': 'You agree to send your data about Steps. Repeated daily.', 'taskId': 2}], 'extraItems': []}, 'created': '2018-11-09T11:09:20.589Z'}}, {'key': '9999', 'start': '2018-12-03T15:45:09Z', 'config': {'created': 'ISO date string', 'updated': 'ISO date string', 'published': 'ISO date string', 'generalities': {'title': 'My amazing study', 'description': 'This is a study about amazing people', 'startDate': '2018-09-11', 'endDate': '2020-10-12', 'principalInvestigators': [{'name': 'Arvin Goburdhun', 'contact': 'arvin@something.com', 'institution': 'University of Oxford'}], 'institutions': [{'name': 'University of Oxford', 'contact': 'asdasd', 'dataAccess': 'full'}, {'name': 'NHS Oxfordshire', 'contact': 'https://www.oxfordhealth.nhs.uk/'}]}, 'inclusionCriteria': {'minAge': 18, 'maxAge': 100, 'gender': ['male', 'female', 'other'], 'lifestyle': {'active': 'yes', 'smoker': 'notrequired'}, 'criteriaQuestions': [{'title': 'Are you pregnant?', 'answer': 'yes'}], 'diseases': {'COPD': '123123123'}, 'medications': {'Aspirin': '13123123'}}, 'tasks': [{'id': 1, 'type': 'dataQuery', 'scheduling': {'startEvent': 'consent', 'startDelaySecs': 1000, 'untilSecs': 100000000, 'occurrences': 100, 'intervalType': 'd', 'interval': 12, 'months': [1, 2], 'monthDays': [1, 12, 24], 'weekDays': [1, 4, 7]}, 'dataType': 'steps', 'aggregated': true, 'bucket': 'week'}, {'id': 2, 'type': 'form', 'scheduling': {'startEvent': 'consent', 'startDelaySecs': 0, 'occurrences': 2, 'intervalType': 'd', 'interval': 12}, 'formKey': '12121212'}], 'consent': {'invitation': 'We would like to invite you to take part in our research study.', 'privacyPolicy': 'This is a semi-automatically generated text.', 'taskItems': [{'description': 'I agree to send my data related to steps every week.', 'taskId': 1}, {'description': 'I agree to answer the QoL form every day.', 'taskId': 2}], 'extraItems': [{'description': 'I agree to answer the QoL form every day.', 'optional': true, 'taskId': 2}, {'description': 'I agree to do some analysis', 'optional': false}]}}}]
      )
    }, Math.floor(Math.random() * 2000))
  })
}

export function getStudyConfig (studyKey) {
  return new Promise(function (resolve, reject) {
    if (studyKey === '9999') {
      setTimeout(function () {
        resolve(
          {
            'created': 'ISO date string',
            'updated': 'ISO date string',
            'published': 'ISO date string',
            'generalities': {
              'title': 'My amazing study',
              'description': 'This is a study about amazing people',
              'startDate': '2018-09-11',
              'endDate': '2020-10-12',
              'principalInvestigators': [
                {
                  'name': 'Arvin Goburdhun',
                  'contact': 'arvin@something.com',
                  'institution': 'University of Oxford'
                }
              ],
              'institutions': [
                {
                  'name': 'University of Oxford',
                  'contact': 'asdasd',
                  'dataAccess': 'full'
                },
                {
                  'name': 'NHS Oxfordshire',
                  'contact': 'https://www.oxfordhealth.nhs.uk/'
                }
              ]
            },
            'inclusionCriteria': {
              'minAge': 18,
              'maxAge': 100,
              'gender': [
                'male',
                'female',
                'other'
              ],
              'lifestyle': {
                'active': 'yes',
                'smoker': 'notrequired'
              },
              'criteriaQuestions': [
                {
                  'title': 'Are you pregnant?',
                  'answer': 'yes'
                }
              ],
              'diseases': {
                'COPD': '123123123'
              },
              'medications': {
                'Aspirin': '13123123'
              }
            },
            'tasks': [
              {
                'id': 1,
                'type': 'dataQuery',
                'scheduling': {
                  'startEvent': 'consent',
                  'startDelaySecs': 1000,
                  'untilSecs': 100000000,
                  'occurrences': 100,
                  'intervalType': 'd',
                  'interval': 12,
                  'months': [
                    1,
                    2
                  ],
                  'monthDays': [
                    1,
                    12,
                    24
                  ],
                  'weekDays': [
                    1,
                    4,
                    7
                  ]
                },
                'dataType': 'steps',
                'aggregated': true,
                'bucket': 'week'
              },
              {
                'id': 2,
                'type': 'form',
                'scheduling': {
                  'startEvent': 'consent',
                  'startDelaySecs': 0,
                  'occurrences': 2,
                  'intervalType': 'd',
                  'interval': 12
                },
                'formKey': '1234'
              }
            ],
            'consent': {
              'invitation': 'We would like to invite you to take part in our research study.',
              'privacyPolicy': 'This is a semi-automatically generated text.',
              'taskItems': [
                {
                  'description': 'I agree to send my data related to steps every week.',
                  'taskId': 1
                },
                {
                  'description': 'I agree to answer the QoL form every day.',
                  'taskId': 2
                }
              ],
              'extraItems': [
                {
                  'description': 'I agree to answer the QoL form every day.',
                  'optional': true,
                  'taskId': 2
                },
                {
                  'description': 'I agree to do some analysis',
                  'optional': false
                }
              ]
            }
          }
        )
      }, Math.floor(Math.random() * 5000))
    } else if (studyKey === '1234') {
      setTimeout(function () {
        resolve({
          'published': '2018-11-09T11:09:20.498Z',
          'generalities': {
            'title': 'COPD Study',
            'description': "It's a study",
            'startDate': '2018-11-10T00:00:00.000+00:00',
            'endDate': '2019-05-24T00:00:00.000+01:00',
            'principalInvestigators': [
              {
                'name': 'J Lee',
                'contact': 'IBME Oxford',
                'institution': 'University of Oxford'
              },
              {
                'name': 'C Velardo',
                'contact': 'IBME Oxford',
                'institution': 'University of Oxford'
              }
            ],
            'institutions': [
              {
                'name': 'University of Oxford, IBME',
                'contact': 'Old Road Campus',
                'dataAccess': 'full'
              },
              {
                'name': 'University of Oxford, Worcester',
                'contact': 'Worcester College',
                'dataAccess': 'full'
              }
            ]
          },
          'inclusionCriteria': {
            'minAge': 18,
            'maxAge': 100,
            'gender': [
              'male',
              'female',
              'other'
            ],
            'lifestyle': {
              'active': 'notrequired',
              'smoker': 'notrequired'
            },
            'criteriaQuestions': [
              {
                'title': 'Are you a smoker?',
                'answer': 'no'
              }
            ],
            'diseases': {
              'Acute exacerbation of COPD': '195951007'
            },
            'medications': {}
          },
          'tasks': [
            {
              'id': 1,
              'type': 'form',
              'scheduling': {
                'startEvent': 'consent',
                'startDelaySecs': 432000,
                'untilSecs': 1036800,
                'intervalType': 'd',
                'months': [],
                'monthDays': [],
                'weekDays': [],
                'interval': 1
              },
              'formKey': '1234',
              'formName': 'COPD Form'
            },
            {
              'id': 2,
              'type': 'dataQuery',
              'scheduling': {
                'startEvent': 'consent',
                'intervalType': 'd',
                'interval': 1,
                'months': [],
                'monthDays': [],
                'weekDays': []
              },
              'dataType': 'steps',
              'aggregated': true,
              'bucket': 'day'
            }
          ],
          'consent': {
            'invitation': 'Something something consent',
            'privacyPolicy': 'Something something consent',
            'taskItems': [
              {
                'description': 'You agree to answer the "COPD Form" form. 5 days after you have consented. Until 12 days after you have consented. Repeated daily.',
                'taskId': 1
              },
              {
                'description': 'You agree to send your data about Steps. Repeated daily.',
                'taskId': 2
              }
            ],
            'extraItems': []
          },
          'created': '2018-11-09T11:09:20.589Z'
        })
      }, Math.floor(Math.random() * 5000))
    } else {
      setTimeout(function () {
        reject(new Error('Study not found'))
      }, Math.floor(Math.random() * 5000))
    }
  })
}

// Token refresh - storage

export function removeStudy (userKey, studyKey) {

}

export function sendData () {

}
