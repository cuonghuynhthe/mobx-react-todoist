import * as React from 'react'
import { Provider } from 'mobx-react'
import {setStylesTarget} from "typestyle"
import { initStore, Store } from '../store'
import Todoist from '../components/Todoist/Todoist'

if (typeof document !== 'undefined') {
  setStylesTarget(document.getElementById('styles-target') as any)
}

export default class Counter extends React.Component<void, void> {
  store: Store

  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(isServer)

    return { lastUpdate: store.lastUpdate, isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.lastUpdate)
  }

  render () {
    return (
      <Provider>
        <Todoist />
      </Provider>
    )
  }
}