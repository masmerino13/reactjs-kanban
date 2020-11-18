import { action, thunk } from 'easy-peasy'
import collectionService from './api/collections.service'
import taskService from './api/tasks.service'

export default {
  collections: {
    list: [],

    // actions
    fetched: action((state, payload) => {
      state.list = payload
    }),

    // thunks
    fetchCollections: thunk(async (actions, payload, { getStoreState }) => {
      const storeState = getStoreState()
      let collections = []
      const response = await collectionService.fetchCollections()

      if (response.status === 'success') {
        response.data.forEach(async collection => {
          const co = collection.data()
          co.id = collection.id
          co.items = storeState.tasks.list.filter(task => task.collection === co.id)

          collections.push(co)
        })
      }

      actions.fetched(collections)
    })
  },

  tasks: {
    list: [],

    // actions
    fetched: action((state, payload) => {
      state.list = payload
    }),

    // thunks
    fetchAllTasks: thunk(async actions => {
      let tasks = []
      const response = await taskService.fetchAllTasks()

      if (response.status === 'success') {
        response.data.forEach(async task => {
          const item = task.data()
          item.id = task.id

          tasks.push(item)
        })
      }

      actions.fetched(tasks)
    })
  },

  // thunks
  initialise: thunk(async (actions, payload, { dispatch }) => {
    await dispatch.tasks.fetchAllTasks()
    await dispatch.collections.fetchCollections()
  }),
}
