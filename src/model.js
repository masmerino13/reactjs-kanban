import { action, thunk } from 'easy-peasy'
import collectionService from './services/collections.service'
import taskService from './services/tasks.service'

export default {
  collections: {
    list: [],
    results: [],

    // actions
    fetched: action((state, payload) => {
      state.list = payload
    }),

    setResults: action((state, payload) => {
      state.results = payload
    }),

    // thunks
    fetchCollections: thunk(async (actions, payload, { getStoreState }) => {
      const storeState = getStoreState()
      let collections = []
      const { status, data } = await collectionService.fetchCollections()

      if (status === 'OK') {
        data.forEach(collection => {
          collection.items = storeState.tasks.list.filter(task => task.collection === collection.id)

          collections.push(collection)
        })
      }

      actions.fetched(collections)
      actions.setResults(collections)
    })
  },

  tasks: {
    list: [],
    error: null,

    // actions
    fetched: action((state, payload) => {
      state.list = payload
    }),

    setError: action((state, payload) => {
      state.error = payload
    }),

    // thunks
    fetchAllTasks: thunk(async actions => {
      const { status, data } = await taskService.fetchAllTasks()

      if (status === 'OK') {
        actions.fetched(data)
        actions.setError(null) // Reset error
      } else {
        actions.setError(error)
      }
    }),

    createTask: thunk(async (actions, payload) => {
      const response = await taskService.createTask(payload)

      if (response.status !== 'Created') {
        actions.setError(response.error)
      } else {
        actions.setError(null)
      }

      return response
    }),

    updateTask: thunk(async (actions, payload) => {
      const response = await taskService.updateTask(payload.data, payload.id)

      if (response.status === 'OK') {
        actions.setError(response.error)
      } else {
        actions.setError(null)
      }

      return response
    })
  },

  // thunks
  initialise: thunk(async (actions, payload, { dispatch }) => {
    await dispatch.tasks.fetchAllTasks()
    await dispatch.collections.fetchCollections()
  }),
}
