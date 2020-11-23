import axios from './axios'

export default (() => {
  return {
    fetchCollections: async () => {
      const response = await axios.get('/collections')

      return { status: response.statusText, data: response.data }
    },
  }
})()
