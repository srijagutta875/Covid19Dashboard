import './index.css'

import {Component} from 'react'

import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <img
          src="https://res.cloudinary.com/dzveiche5/image/upload/v1765804612/COVID19INDIA_pjj05m.png"
          alt="website logo"
        />
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
