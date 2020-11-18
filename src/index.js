
import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider, createStore } from 'easy-peasy'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

import App from './App'
import model from './model'

const store = createStore(model)

function Root() {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('app'))