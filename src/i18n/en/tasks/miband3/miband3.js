'use strict'

export default {
  studies: {
    tasks: {
      miband3: {
        title: 'Miband3',
        shortDescription: 'Download your activity data',
        shortTitle: 'Getting your activity data, son',
        description: 'Activity monitoring for a specified frequency during a set amount of time',
        activityTypes: {
          walk: 'Walking',
          unknown: 'Unknown'
        },
        dataDownloadError: 'Could not retrieve data from the band, please retry or cancel.'
      }
    }
  }
}
