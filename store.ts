import { action, observable } from 'mobx'

let store: Store | null = null

export class Store {
  @observable lastUpdate = 0
  @observable light = false
  timer: number

  constructor (isServer, lastUpdate) {
    this.lastUpdate = lastUpdate
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    })
  }

  stop = () => clearInterval(this.timer)
}

export function initStore (isServer, lastUpdate = Date.now()): Store {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer, lastUpdate)
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate)
    }
    return store
  }
}