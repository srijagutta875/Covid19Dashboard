import './index.css'

import {Component} from 'react'

import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <p className="footerlogo">
          COVID19<span className="footerspan">INDIA</span>
        </p>
        <p className="footerPara">
          we stand with everyone fighting on the front lines
        </p>
        <div className="footerIcons">
          <VscGithubAlt className="footerIcon" />
          <FiInstagram className="footerIcon" />
          <FaTwitter className="footerIcon" />
        </div>
      </div>
    )
  }
}
export default Footer
