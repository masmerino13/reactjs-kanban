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
  }
})()
