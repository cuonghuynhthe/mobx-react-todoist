import * as React from 'react'
import Link from 'next/link'

export interface IPost {
    by: string
    title: string
}

interface IProps {
    userAgent?: string
    data: IPost
}

export default class extends React.Component<IProps, void> {
  render () {
    return <div>
      Component {this.props.userAgent}
      <br/>
      { this.props.data.title }
      <br/>
      <Link href='/' prefetch><a>Home</a></Link>
    </div>
  }
}
