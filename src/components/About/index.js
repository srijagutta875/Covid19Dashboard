import './index.css'

import {Component} from 'react'

import PageLayout from '../PageLayout'

import Footer from '../Footer'

class About extends Component {
  render() {
    return (
      <PageLayout>
        <h1>About</h1>
        <Footer />
      </PageLayout>
    )
  }
}
export default About
