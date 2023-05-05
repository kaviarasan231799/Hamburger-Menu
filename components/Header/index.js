import Popup from 'reactjs-popup'
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {withRouter, Link} from 'react-router-dom'

const Header = () => (
  <div className="app-container">
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png "
          alt="website logo"
          className="img-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="div-container">
            <button
              type="button"
              data-testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="link-list">
              <li className="list-con">
                <Link to="/" onClick={() => close()} className="link-con">
                  <AiFillHome size="36" />
                  <p className="head-para">Home</p>
                </Link>
              </li>
              <li className="list-con">
                <Link to="/about" onClick={() => close()} className="link-con">
                  <BsInfoCircleFill size="36" />
                  <p className="head-para">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)
export default withRouter(Header)
