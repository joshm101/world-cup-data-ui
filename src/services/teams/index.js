import axios from 'axios'

const API_URL = process.env.REACT_APP_WCDUI_API_URL

/**
 * Retrieves all 2018 World Cup teams from the API
 * @return {Promise<object[]>} - Teams array in a Promise
 */
const getTeams = () => {
  return axios.get(`${API_URL}/teams`)
    .then((response) => {
      // axios contains API response in data
      // property and API response data is
      // in a data property, hence
      // response.data.data
      return response.data.data
    })
    .catch((error) => {
      if (error.response) {
        throw new Error(
          'An unknown error occurred while retrieving teams.'
        )
      }

      if (error.request) {
        throw new Error(
          'The server failed to respond after requesting team data.'
        )
      }

      throw new Error(
        'An unknown error occurred while retrieving team data.'
      )
    })
}

export {
  getTeams
}