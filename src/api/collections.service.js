import firebase from '../Firebase'

const ref = firebase.database.collection('collections')

export default (() => {
  return {
    fetchCollections: () => {
      return ref
        .orderBy('order')
        .get()
        .then(snapshot => ({ status: 'success', data: snapshot }))
        .catch((error) => ({ status: 'error', error: error }))
    },
  }
})()
