import React from 'react'
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props){
        super(props)
        this.connectWalletHandler = this.connectWalletHandler.bind(this)
        this.buttonMessage = "Connect Wallet"
    }

    connectWalletHandler() {

        console.log("button clicked")
        console.log(this.props.provider)
        // console.log(this.props.provider?.selectedAddress)
        console.log(this.props.accounts)
        this.props.provider.request({ method: 'eth_requestAccounts' })
        this.buttonMessage = "Wallet connected"
      }

    render() {
        
        return (
            <div>
                
                <header className="header">
    <div className="header__content">
      <div className="header__logo">
        <a href="index2.html">
          <img src="/assets/img/logo/wibt white logo.png" alt />
        </a>
      </div>
      <form action="#" className="header__search">
        <input
          type="text"
          placeholder="Search items, collections, and creators"
        />
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
          </svg>
        </button>
        <button type="button" className="close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
          </svg>
        </button>
      </form>
      <div className="header__menu">
        <ul className="header__nav">
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              
            >
              <Link to={`/home`}>Home</Link>
              
            </a>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              
            >
             <Link to={`/explore`}>Explore</Link> 
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu"
            >
              <li>
                <a href="explore3.html">Explore</a>
              </li>
              <li>
                <a href="item2.html">Item</a>
              </li>
            </ul>
          </li>
          <li className="header__nav-item">
            <a  className="header__nav-link">
            <Link to={`/activity`}>Activity</Link>
            </a>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
            >
             <Link to={`/blog`}>Community</Link>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu0"
            >
              <li className="dropdown-submenu">
                <a
                  className="dropdown-item"
                  href="#"
                  role="button"
                  id="dropdownMenuSub"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Educational Content{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                  </svg>
                </a>
                <ul
                  className="dropdown-menu header__nav-menu"
                  aria-labelledby="dropdownMenuSub"
                >
                  <li>
                    <a href="blog2.html">Educational Content</a>
                  </li>
                  <li>
                    <a href="article.html">Article</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="faq.html">Help center</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
            </ul>
          </li>
          {/* <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenu1"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu1"
            >
              <li>
                <a href="authors.html">Authors</a>
              </li>
              <li>
                <a href="author.html">Author</a>
              </li>
              <li>
                <a href="collection.html">Collection</a>
              </li>
              <li>
                <a href="create.html">Create</a>
              </li>
            </ul>
          </li> */}
          {/* <li className="header__nav-item">
            <a
              className="header__nav-link header__nav-link--menu"
              href="#"
              role="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" />
              </svg>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu2"
            >
              <li>
                <a href="signin.html">Sign in</a>
              </li>
              <li>
                <a href="signup.html">Sign up</a>
              </li>
              <li>
                <a href="forgot.html">Forgot password</a>
              </li>
              <li>
                <a href="404.html">404 Page</a>
              </li>
              <li>
                <a href="privacy.html">Privacy policy</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
      <div className="header__actions">
        <div className="header__action header__action--search">
          <button className="header__action-btn" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
            </svg>
          </button>
        </div>
        <div className="header__action header__action--signin">
          <a
            className="header__action-btn header__action-btn--signin"
            
          >
            <span onClick={this.connectWalletHandler}>{this.buttonMessage}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
            </svg>
          </a>
        </div>
      </div>
      <button className="header__btn" type="button">
        <span />
        <span />
        <span />
      </button>
    </div>
  </header>
  
            </div>
        )
    }
}

export default Header;