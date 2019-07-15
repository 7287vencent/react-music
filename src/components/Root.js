import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import '../assets/css/index.styl'
import store from '../redux/store'
export class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App></App>
      </Provider>
    )
  }
}

export default Root
