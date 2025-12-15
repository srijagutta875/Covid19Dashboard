import './index.css'

import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

class Header extends Component {
  render() {
    const {location} = this.props
    const currentPath = location.pathname
    return (
      <div className="headerContainer">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dzveiche5/image/upload/v1765804612/COVID19INDIA_pjj05m.png"
            alt="website logo"
          />
        </Link>
        <ul className="routesList">
          <li className="listItem">
            <Link
              to="/"
              className={`linkItem ${currentPath === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="listItem">
            <Link
              to="/about"
              className={`linkItem ${currentPath === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default withRouter(Header)
