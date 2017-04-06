import * as React from 'react'
import * as c from 'classnames'
import { observer} from 'mobx-react/index'

import { Styles } from '../styles'

interface IProps extends React.Props<any> {
  value?: string
  defaultValue?: string 
  placeholder?: string
  type: string
  cssClass: string
  onChange(value: string)
  onBlur(value: number)
}
@observer
export default class Input extends React.Component<IProps, any>{
  onChange = (e) => {
    if (!this.props.onChange) {
      return
    }
    this.props.onChange(e.target.value)
  }

  onBlur = (e) => {
    if (!this.props.onBlur) {
      return
    }
    this.props.onBlur(-1)
  }

  render(){
    return (
      <input type={this.props.type } className={ this.props.cssClass }  style={ Styles.form_control}
          placeholder={ this.props.placeholder } 
          value={ this.props.value } defaultValue={ this.props.defaultValue } onChange={ this.onChange } onBlur={this.onBlur }>
      </input>
    )
  }
}
