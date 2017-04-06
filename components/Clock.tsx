import * as React from 'react'
import * as c from 'classnames'
import { style } from 'typestyle'

/** convert a style object to a CSS class name */
const light = style({
  backgroundColor: '#999',
});

const container = style({
  padding: 15,
  color: '#82FA58',
  display: 'inline-block',
  font: '50px menlo, monaco, monospace',
  backgroundColor: '#000',
})

export default (props) => {
  return (
    <div className={c(props.light ? light : '', container)}>
      {format(new Date(props.lastUpdate))}
      <br/>
      <span className='light'>Some text</span>
    </div>
  )
}

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => n < 10 ? `0${n}` : n