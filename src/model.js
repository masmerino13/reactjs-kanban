import { action, thunk } from 'easy-peasy';
import apiService from './service';

export default {
  collections: {
    list: [],

    // actions
    fetched: action((state, payload) => {
      state.list = payload
    }),
    saved: action((state, payload) => {
      state.list = payload
    }),

    // thunks
    save: thunk(async (actions, payload) => {
      const collections = await apiService.saveCollection(payload);
      actions.saved(collections);
    }),
    fetchCollections: thunk(async (actions) => {
      const todos = await apiService.fetchCollections();
      actions.fetched(todos);
    })
  },

  // thunks
  initialise: thunk(async (actions, payload, { dispatch }) => {
    await dispatch.collections.fetchCollections();
  }),
};
