import { action, observable, computed } from 'mobx'
import { IProps } from './Todoist'

export class Store {
props: IProps
  @observable todos = [
    {id: Date.now(), completed: false, value: "Learn ReactJS"}, 
    {id: Date.now()+1, completed: false, value: "Learn NodeJS"},
    {id: Date.now()+2, completed: false, value: "Learn Ruby On Rails"}]
  @observable task = ''
  @observable active = false
  @observable undo = false
  @observable undoTaskId = -1
  @observable editable = -1

  constructor(props: IProps) {
    this.init(props)
  }

  @action init(props: IProps) {
    this.props = props
  }
}