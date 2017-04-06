import * as React from 'react'
import axios from 'axios'

import Post, { IPost } from '../components/NewsPost'

interface IProps {
  userAgent: string
  post: IPost
}

export default class extends React.Component<IProps, void> {
  static async getInitialProps ({ req, query }) {
    const resp = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${ query.id }.json`)

    const post = resp.data

    return req
      ? { userAgent: req.headers['user-agent'], post }
      : { userAgent: navigator.userAgent, post }
  }
  render () {
    return (
      <Post data={ this.props.post } userAgent={ this.props.userAgent } />
    )
  }
}
