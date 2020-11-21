import firebase from '../Firebase'

const ref = firebase.database.collection('tasks')

export default (() => {
  return {
    fetchAllTasks: () => {
      return ref
        .orderBy('order')
        .get()
        .then(snapshot => ({ status: 'success', data: snapshot }))
        .catch((error) => ({ status: 'error', error: error }))
    },

    createTask: data => {
      /**
       * All new task added to the To Do collection by default
       */
      data.collection = '5kjBunTkrH60Y449o8Sr'

      return ref.add(data)
      .then(snapshot => ({ status: 'success', data: snapshot }))
      .catch((error) => ({ status: 'error', error: error }))
    },

    updateTask: (data, taskId) => {
      return ref.doc(taskId).update(data)
        .then(snapshot => ({ status: 'success', data: snapshot }))
        .catch((error) => ({ status: 'error', error: error }));
    }
  }
})()
