import Router from '@/presentation/components/router'
import '@/presentation/styles/globals.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { globalStore } from '../store/configure-store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={globalStore}>
    <Router />
  </Provider>,
  document.getElementById('main')
)
