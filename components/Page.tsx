import * as React from 'react'
import { Link } from '../routes'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'
import { Store } from '../store'

interface IProps {
  title: string
  linkTo: string

  store?: Store
}

@inject('store')
@observer
class Page extends React.Component<IProps, void> {
  componentDidMount () {
    this.props.store!.start()
  }

  componentWillUnmount () {
    this.props.store!.stop()
  }

  stop() {
    this.props.store!.stop()
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock lastUpdate={this.props.store!.lastUpdate} light={this.props.store!.light} />
        <button onClick={ this.stop.bind(this) } className='light'>Stop</button>
        <nav>
          <Link href={this.props.linkTo} prefetch><a>Navigate to the other page</a></Link>
          <br/>
          <Link route='news' params={{id: '8863'}} prefetch><a>News</a></Link>
        </nav>
      </div>
    )
  }
}

export default Page