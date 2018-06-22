import axios from 'axios'

const API_URL = process.env.REACT_APP_WCDUI_API_URL

/**
 * Retrieves 2018 World Cup group stage standings from the API
 * @return {Promise<object[]>} - Group standings array in a Promise
 */
const getGroupStandings = () => {
  return axios.get(`${API_URL}/group-standings`)
    // axios contains API response in data
    // property and API response data is
    // in a data property, hence
    // response.data.data
    .then(response => response.data.data)
    .catch((error) => {
      if (error.response) {
        throw new Error(
          'An unknown error occurred while retrieving ' +
          'group stage standings from the API'
        )
      }

      if (error.request) {
        throw new Error(
          'The server failed to responnd after ' +
          'requesting group stage standings data.'
        )  
      }

      throw new Error(
        'An unknown error occured while retrieving ' +
        'group stage standings.'
      )
    })
}

export {
  getGroupStandings
}
