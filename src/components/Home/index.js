import {Component} from 'react'
import Header from '../Header'

import UserStories from '../UserStories'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserStories />
      </div>
    )
  }
}

export default Home
