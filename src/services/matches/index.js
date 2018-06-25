import axios from 'axios'
import moment from 'moment'

const API_URL = process.env.REACT_APP_WCDUI_API_URL

const getMatches = (startDateString, endDateString) => {
  let startDate, endDate
  let params = {}
  if (startDateString) {
    // startDateString is defined, set start_date
    // request param
    startDate = moment(startDateString, 'YYYY-MM-DD')
    if (!startDate.isValid()) {
      throw new Error('Invalid start date specified.')
    }
    params = {
      ...params,
      start_date: startDate.format('YYYY-MM-DD')
    }
  }
  if (endDateString) {
    // endDateString is defined, set end_date
    // request param
    endDate = moment(endDateString, 'YYYY-MM-DD')
    if (!endDate.isValid()) {
      throw new Error('Invalid end date specified.')
    }
    params = {
      ...params,
      end_date: endDate.format('YYYY-MM-DD')
    }
  }
  console.log('service')

  return axios.get(
    `${API_URL}/matches`,
    {
      params
    }
  ).then(response =>
      // axios contains API response in data
      // property and API response data is
      // in a data property, hence
      // response.data.data
    response.data.data
  ).catch((error) => {
    if (error.response) {
      throw new Error(
        'An unknown error occurred while retrieving matches.'
      )
    }
    
    if (error.request) {
      throw new Error(
        'The served failed to respond after requesting matches.'
      )
    }

    throw new Error(
      'An unknown error occurred while retrieving matches.'
    )
  })
}

export {
  getMatches
}
