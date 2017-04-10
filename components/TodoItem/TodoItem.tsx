import * as React from 'react'
import * as c from 'classnames'
import { observer} from 'mobx-react/index'
import { action } from 'mobx'

import { Styles } from '../styles'
import { Store } from '../Todoist/store'
import Input from '../Input/Input'

export interface IProps extends React.Props<any> {
  id: number 
  value: string
  completed: boolean
  onChangeValue?(value: string)
  onItemChecked?(checked: boolean)
}

@observer
export default class TodoItem extends React.Component<IProps, any>{
  store: Store
  constructor(props: IProps) {
    super(props)
    this.store = new Store(props)
  }
  
  onChangeCompleted = (e) => {
    if (!this.props.onItemChecked) {
      return
    }
    this.props.onItemChecked(e.target.checked)
  }

  onChangeValue = (value) => {
    if (!this.props.onChangeValue) {
      return
    }
    this.props.onChangeValue(value)
  }

  handleEditable = () => {
    this.store.editable = this.props.id
  }

  onBlur = (value) => {
    this.store.editable = value
  }

  render(){
    return (
      <div>
         { this.store.editable == this.props.id ?(
           <div>
            <Input defaultValue={ this.props.value } ref="editable"
              onChange={(value) => {this.onChangeValue(value)} }  
              type="text" cssClass="form-control" onBlur={(value) => this.onBlur(value)} 
              /> 
          </div>
          ): 
          <div className={"radio" + (this.store.editable === this.props.id ? " hide" : " show")} key={this.props.id }>
            <label style={ Styles.label }>
              <input style={ Styles.cursor }
                type="radio" 
                className="optradio" 
                checked={this.props.completed}              
                onChange={this.onChangeCompleted}
                />
            </label>
            <a onClick={ this.handleEditable }>{this.props.value}</a>
          </div>
        } 
        
        
      </div>
    )
  }
}