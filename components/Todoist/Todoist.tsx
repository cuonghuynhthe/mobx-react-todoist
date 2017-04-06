import * as React from 'react';
import { observable, action } from 'mobx'
import { observer} from 'mobx-react/index'
import * as _ from 'lodash'
import { Store } from './store'

import { Styles } from '../styles'
import TodoItem from '../TodoItem/TodoItem'
import Button from '../Button/Button'
import Input from '../Input/Input'

export interface IProps extends React.Props<any>{      
}

@observer
export default class Todoist extends React.Component<IProps, any>{
  store: Store
  constructor(props: IProps) {
    super(props)
    this.store = new Store(props)
  }

  render(){
    return (
      <div style={ Styles.container } onBlur={this.onBlur}>
        <h2>TodoList</h2>
          <ul style={ Styles.ul }>
            <li>
              <div className="todo-list">
                  <ul style={ Styles.ul }>
                  {this.store.todos.map(todo =>
                    <li key={todo.id} className={(todo.completed ? 'hide' : 'show')} style={ Styles.margin_left_10}>
                        <TodoItem value={ todo.value} 
                        id={todo.id} 
                        completed={ todo.completed }
                        onChangeValue ={ value => {this.handleUpdateTask(todo.id, value)}}
                        onItemChecked={(value) => {this.finishedTask(todo.id, value)}}
                        />
                    </li>
                  )}  
                  </ul>
              </div>
            </li>
            <li className={this.store.active ? "show" : "hide"}>
              <form>
              <div className="form-group" >
                <Input type="text" cssClass="form-control" 
                  placeholder="add task" value={ this.store.task } 
                  onChange={(value) => this.handleOnChange(value)}
                  onBlur={(value) => this.onBlur(value)}
                  />
                <div style={Styles.button_area}>
                <Button cssClass="btn btn-info" onClick={this.handleAddTask} label="Save"/>
                <Button cssClass="btn btn-warning" onClick={this.toogleAddTask} label="Cancel"/>
                </div>
              </div>
              </form>
            </li>
            <li className={this.store.active ? "hide" : "show"}>
              <Button cssClass="btn btn-link" onClick={ this.toogleAddTask} icon="fa fa-plus" label="Add task"/>
            </li>
            <li className={this.store.undo ? "show" : "hide"}>
              <div style={Styles.form_undo}>
                <Button cssClass="btn btn-primary" onClick={this.handleUndoTask} label="Undo"/>
                <Button cssClass="btn btn-danger" onClick={this.hanldeClose} label="Hide"/>
              </div>
            </li>
        </ul>
      </div>
    )
  }

  toogleAddTask = () => {
   this.store.active = !this.store.active  
  }

  handleOnChange = (value) => {
    this.store.task = value
  }

  finishedTask = (todoId ,completed) => {
    let todo = this.getTaskById(todoId)
    todo.completed = true

    this.store.undo = true
    this.store.undoTaskId = todoId
  }

  handleAddTask = () => {
    if(this.store.task === '') return
    this.store.todos.push({id: Date.now(), completed: false, value: this.store.task })
    this.store.task = ''
  }

  handleUpdateTask = (todoId ,value) => {
    let todo = this.getTaskById(todoId)
    todo.value = value
  }

  handleUndoTask = () => {
    let todo = this.getTaskById(this.store.undoTaskId)
    todo.completed = false    
    this.store.undo = false
  }

  hanldeClose = () => {
    this.store.undo = false
    this.store.undoTaskId = -1
  }

  getTaskById = (id) => {
    return _.find(this.store.todos, {id: id})
  } 

  onBlur = (value) => {
    this.store.editable = value
  }
}
