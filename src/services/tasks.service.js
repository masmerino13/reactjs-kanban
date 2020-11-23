import axios from './axios'

export default (() => {
  return {
    fetchAllTasks: async () => {
      const response = await axios.get('/tasks')

      return { status: response.statusText, data: response.data }
    },

    createTask: async data => {
      console.log('the data', data)
      /**
       * All new task added to the To Do collection by default
       */
      data.collection = '5kjBunTkrH60Y449o8Sr'

      const response = await axios.post('/tasks', data)

      return { status: response.statusText, data: response.data }
    },

    updateTask: async (data, taskId) => {
      const response = await axios.put(`/tasks/${taskId}`, data)

      return { status: response.statusText, data: response.data }
    }
  }
})()
