import './index.css'

import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

class Header extends Component {
  render() {
    const {location} = this.props
    const currentPath = location.pathname
    return (
      <div className="headerContainer">
        <Link to="/" className="linkItem">
          <p className="headerlogo">
            COVID19<span className="headerspan">INDIA</span>
          </p>
        </Link>
        <ul className="routesList">
          <li className="listItem">
            <Link to="/" className="linkItem">
              <button
                type="button"
                className={`buttonItem ${currentPath === '/' ? 'active' : ''}`}
              >
                Home
              </button>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/about" className="linkItem">
              <button
                type="button"
                className={`buttonItem ${
                  currentPath === '/about' ? 'active' : ''
                }`}
              >
                About
              </button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default withRouter(Header)
