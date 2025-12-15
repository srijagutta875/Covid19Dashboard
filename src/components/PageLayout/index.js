import './index.css'

import {Component} from 'react'

import Header from '../Header'

class PageLayout extends Component {
  render() {
    const {children} = this.props
    return (
      <div className="layoutContainer">
        <Header />
        <div className="layoutInsideCont">{children}</div>
      </div>
    )
  }
}
export default PageLayout
