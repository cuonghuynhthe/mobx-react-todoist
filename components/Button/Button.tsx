import * as React from 'react'
import * as c from 'classnames'

import { Styles } from '../styles'

interface IProps extends React.Props<any> {
  label: string
  onClick?: any
  cid?: string
  icon?: string
  cssClass: string 
}

export default class Button extends React.Component<IProps, any> {
  render(){
  return (
    <div className={ this.props.cssClass } onClick={ this.props.onClick } style={Styles.margin}> 
      {
        this.props.icon ? (
          <i className={this.props.icon} style={ Styles.margin}></i>
          ) : undefined
      }
      <span>{ this.props.label }</span>
    </div>
  )
}
}

