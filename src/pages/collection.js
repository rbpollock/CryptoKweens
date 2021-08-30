import React from 'react'
import ModelInformation from './model-information';
import GenImageCard from './generated-image-card';

class Collection extends React.Component {
    render() {
        return (
            <div>
                
                {/* header */}
  <header className="header">
    <div className="header__content">
      <div className="header__logo">
        <a href="index.html">
          <img src="img/logo.svg" alt />
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
              href="#"
              role="button"
              id="dropdownMenuHome"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Home{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenuHome"
            >
              <li>
                <a href="index.html">Home style 1</a>
              </li>
              <li>
                <a href="index2.html">Home style 2</a>
              </li>
            </ul>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Explore{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu"
            >
              <li>
                <a href="explore.html">Explore style 1</a>
              </li>
              <li>
                <a href="explore2.html">Explore style 2</a>
              </li>
              <li>
                <a href="explore3.html">Explore style 3</a>
              </li>
              <li>
                <a href="item.html">Item style 1</a>
              </li>
              <li>
                <a href="item2.html">Item style 2</a>
              </li>
            </ul>
          </li>
          <li className="header__nav-item">
            <a href="activity.html" className="header__nav-link">
              Activity
            </a>
          </li>
          <li className="header__nav-item">
            <a
              className="header__nav-link"
              href="#"
              role="button"
              id="dropdownMenu0"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Community{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
              </svg>
            </a>
            <ul
              className="dropdown-menu header__nav-menu"
              aria-labelledby="dropdownMenu0"
            >
              <li>
                <a href="token.html">Unitok</a>
              </li>
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
                  Blog{" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                  </svg>
                </a>
                <ul
                  className="dropdown-menu header__nav-menu"
                  aria-labelledby="dropdownMenuSub"
                >
                  <li>
                    <a href="blog.html">Blog style 1</a>
                  </li>
                  <li>
                    <a href="blog2.html">Blog style 2</a>
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
          <li className="header__nav-item">
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
          </li>
          <li className="header__nav-item">
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
          </li>
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
            href="signin.html"
          >
            <span>Sign in</span>
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
  {/* end header */}

            {/* main content */}
  <main className="main">
    <div className="main__author" data-bg="img/bg/bg.png" />
    <div className="container">
      <div className="row row--grid">
        <ModelInformation />
        <div className="col-12 col-xl-9">
          <div className="profile">
            {/* tabs nav */}
            <ul
              className="nav nav-tabs profile__tabs"
              id="profile__tabs"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="tab"
                  href="#tab-1"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="true"
                >
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-2"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="false"
                >
                  Created
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-3"
                  role="tab"
                  aria-controls="tab-3"
                  aria-selected="false"
                >
                  My Activity
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="tab"
                  href="#tab-4"
                  role="tab"
                  aria-controls="tab-4"
                  aria-selected="false"
                >
                  Settings
                </a>
              </li>
            </ul>
            {/* end tabs nav */}
          </div>
          {/* content tabs */}
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="tab-1"
              role="tabpanel"
            >
              <div className="row row--grid">
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover1.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Walking on Air</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Reserve price</span>
                        <span>4.89 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>189</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* carousel card */}
                  <GenImageCard />
                  {/* end carousel card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                <GenImageCard />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover3.jpg" alt />
                      <span className="card__time">an hour left</span>
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Flowers in Concrete</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Current price</span>
                        <span>3.19 ETH</span>
                      </div>
                      <button
                        className="card__likes card__likes--active"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>37</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover4.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Industrial Revolution</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Reserve price</span>
                        <span>1.11 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>23</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover5.jpg" alt />
                      <span className="card__time">an hour left</span>
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">I Love You</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Current price</span>
                        <span>0.99 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>358</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
              </div>
              {/* collapse */}
              <div className="row row--grid collapse" id="collapsemore">
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover1.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Walking on Air</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Reserve price</span>
                        <span>4.89 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>189</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* carousel card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover8.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">To Infinity And Beyond</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Reserve price</span>
                        <span>5.04 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span />
                      </button>
                    </div>
                  </div>
                  {/* end carousel card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover2.jpg" alt />
                      <span className="card__time">15 minutes left</span>
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">
                        Les Immortels, the Treachery of Artificial Shadows
                      </a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Current price</span>
                        <span>2.61 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>702</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover3.jpg" alt />
                      <span className="card__time">an hour left</span>
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Flowers in Concrete</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Current price</span>
                        <span>3.19 ETH</span>
                      </div>
                      <button
                        className="card__likes card__likes--active"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>37</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover4.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Industrial Revolution</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Reserve price</span>
                        <span>1.11 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>23</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover5.jpg" alt />
                      <span className="card__time">an hour left</span>
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">I Love You</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Current price</span>
                        <span>0.99 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>358</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
              </div>
              <div className="row row--grid">
                <div className="col-12">
                  <button
                    className="main__load"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsemore"
                    aria-expanded="false"
                    aria-controls="collapsemore"
                  >
                    Load more
                  </button>
                </div>
              </div>
              {/* end collapse */}
            </div>
            <div className="tab-pane fade" id="tab-2" role="tabpanel">
              <div className="row row--grid">
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover8.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Walking on Air</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Was sold for</span>
                        <span>4.89 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>189</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover7.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">
                        Les Immortels, the Treachery of Artificial Shadows
                      </a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Was sold for</span>
                        <span>2.61 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>702</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover6.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Flowers in Concrete</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Was sold for</span>
                        <span>3.19 ETH</span>
                      </div>
                      <button
                        className="card__likes card__likes--active"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>37</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover5.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">Industrial Revolution</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Was sold for</span>
                        <span>1.11 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>23</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover4.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">I Love You</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Was sold for</span>
                        <span>0.99 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span>358</span>
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  {/* card */}
                  <div className="card">
                    <a href="item.html" className="card__cover">
                      <img src="img/cover/cover3.jpg" alt />
                    </a>
                    <h3 className="card__title">
                      <a href="item.html">To Infinity And Beyond</a>
                    </h3>
                    <div className="card__author card__author--verified">
                      <img src="img/avatars/avatar5.jpg" alt />
                      <a href="author.html">@l1rose</a>
                    </div>
                    <div className="card__info">
                      <div className="card__price">
                        <span>Was sold for</span>
                        <span>3.33 ETH</span>
                      </div>
                      <button className="card__likes" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                        </svg>
                        <span />
                      </button>
                    </div>
                  </div>
                  {/* end card */}
                </div>
              </div>
              {/* paginator */}
              <div className="row row--grid">
                <div className="col-12">
                  <div className="paginator">
                    <span className="paginator__pages">8 from 169</span>
                    <ul className="paginator__list">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                          </svg>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* end paginator */}
            </div>
            <div className="tab-pane fade" id="tab-3" role="tabpanel">
              <div className="row">
                {/* sidebar */}
                <div className="col-12 col-xl-4 order-xl-2">
                  <div className="filter-wrap">
                    <button
                      className="filter-wrap__btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFilter"
                      aria-expanded="false"
                      aria-controls="collapseFilter"
                    >
                      Open filter
                    </button>
                    <div
                      className="collapse filter-wrap__content"
                      id="collapseFilter"
                    >
                      {/* filter */}
                      <div className="filter filter--sticky">
                        <h4 className="filter__title">
                          Filters <button type="button">Clear all</button>
                        </h4>
                        <div className="filter__group">
                          <ul className="filter__checkboxes">
                            <li>
                              <input
                                id="type5"
                                type="checkbox"
                                name="type5"
                                defaultChecked
                              />
                              <label htmlFor="type5">Listings</label>
                            </li>
                            <li>
                              <input id="type6" type="checkbox" name="type6" />
                              <label htmlFor="type6">Purchases</label>
                            </li>
                            <li>
                              <input
                                id="type7"
                                type="checkbox"
                                name="type7"
                                defaultChecked
                              />
                              <label htmlFor="type7">Sales</label>
                            </li>
                            <li>
                              <input
                                id="type8"
                                type="checkbox"
                                name="type8"
                                defaultChecked
                              />
                              <label htmlFor="type8">Transfers</label>
                            </li>
                            <li>
                              <input id="type9" type="checkbox" name="type9" />
                              <label htmlFor="type9">Bids</label>
                            </li>
                            <li>
                              <input
                                id="type10"
                                type="checkbox"
                                name="type10"
                              />
                              <label htmlFor="type10">Likes</label>
                            </li>
                            <li>
                              <input
                                id="type11"
                                type="checkbox"
                                name="type11"
                              />
                              <label htmlFor="type11">Followings</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* end filter */}
                    </div>
                  </div>
                </div>
                {/* end sidebar */}
                {/* content */}
                <div className="col-12 col-xl-8 order-xl-1">
                  <div className="row row--grid">
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover1.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Walking on Air</a>
                          </h3>
                          <p className="activity__text">
                            listed by <a href="author.html">@Nickname</a> <br />
                            for <b>0.049 ETH</b>
                          </p>
                          <span className="activity__time">4 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover2.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">To Infinity And Beyond</a>
                          </h3>
                          <p className="activity__text">
                            9 editions listed by <a href="author.html">@neo</a>{" "}
                            <br />
                            for <b>0.085 ETH</b> each
                          </p>
                          <span className="activity__time">21 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover3.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Flowers in Concrete</a>
                          </h3>
                          <p className="activity__text">
                            purchased by <a href="author.html">@johndoe</a>{" "}
                            <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from{" "}
                            <a href="author.html">@min1max</a>
                          </p>
                          <span className="activity__time">21 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover4.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Industrial Revolution</a>
                          </h3>
                          <p className="activity__text">
                            transferred from <a href="author.html">@midinh</a>{" "}
                            <br />
                            to <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">23 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover5.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Tranquility</a>
                          </h3>
                          <p className="activity__text">
                            <a href="author.html">@aaarthur</a> offered{" "}
                            <b>0.002 WETH</b>
                          </p>
                          <span className="activity__time">41 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover6.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Tetradecapus</a>
                          </h3>
                          <p className="activity__text">
                            liked by <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">45 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover7.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Elegance</a>
                          </h3>
                          <p className="activity__text">
                            started following <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">48 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover8.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Walking on Air</a>
                          </h3>
                          <p className="activity__text">
                            started following <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">49 minutes ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* collapse */}
                  <div className="row row--grid collapse" id="collapsemore1">
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover1.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Walking on Air</a>
                          </h3>
                          <p className="activity__text">
                            listed by <a href="author.html">@Nickname</a> <br />
                            for <b>0.049 ETH</b>
                          </p>
                          <span className="activity__time">4 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover2.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">To Infinity And Beyond</a>
                          </h3>
                          <p className="activity__text">
                            9 editions listed by <a href="author.html">@neo</a>{" "}
                            <br />
                            for <b>0.085 ETH</b> each
                          </p>
                          <span className="activity__time">21 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover3.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Flowers in Concrete</a>
                          </h3>
                          <p className="activity__text">
                            purchased by <a href="author.html">@johndoe</a>{" "}
                            <b>0x23d2dc92b...82c6</b> for <b>0.011 ETH</b> from{" "}
                            <a href="author.html">@min1max</a>
                          </p>
                          <span className="activity__time">21 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover4.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Industrial Revolution</a>
                          </h3>
                          <p className="activity__text">
                            transferred from <a href="author.html">@midinh</a>{" "}
                            <br />
                            to <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">23 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover5.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Tranquility</a>
                          </h3>
                          <p className="activity__text">
                            <a href="author.html">@aaarthur</a> offered{" "}
                            <b>0.002 WETH</b>
                          </p>
                          <span className="activity__time">41 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover6.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Tetradecapus</a>
                          </h3>
                          <p className="activity__text">
                            liked by <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">45 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover7.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Elegance</a>
                          </h3>
                          <p className="activity__text">
                            started following <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">48 minutes ago</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-12">
                      <div className="activity">
                        <a href="item.html" className="activity__cover">
                          <img src="img/cover/cover8.jpg" alt />
                        </a>
                        <div className="activity__content">
                          <h3 className="activity__title">
                            <a href="item.html">Walking on Air</a>
                          </h3>
                          <p className="activity__text">
                            started following <a href="author.html">@johndoe</a>
                          </p>
                          <span className="activity__time">49 minutes ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row row--grid">
                    <div className="col-12">
                      <button
                        className="main__load"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsemore1"
                        aria-expanded="false"
                        aria-controls="collapsemore1"
                      >
                        Load more
                      </button>
                    </div>
                  </div>
                  {/* end collapse */}
                </div>
                {/* end content */}
              </div>
            </div>
            <div className="tab-pane fade" id="tab-4" role="tabpanel">
              <div className="row row--grid">
                {/* details form */}
                <div className="col-12 col-lg-6">
                  <form action="#" className="sign__form sign__form--profile">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="sign__title">Profile details</h4>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="username">
                            Login
                          </label>
                          <input
                            id="username"
                            type="text"
                            name="username"
                            className="sign__input"
                            placeholder="User123"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            className="sign__input"
                            placeholder="email@email.com"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="firstname">
                            First name
                          </label>
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="sign__input"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="lastname">
                            Last name
                          </label>
                          <input
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="sign__input"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="sign__btn" type="button">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end details form */}
                {/* password form */}
                <div className="col-12 col-lg-6">
                  <form action="#" className="sign__form sign__form--profile">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="sign__title">Change password</h4>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="oldpass">
                            Old password
                          </label>
                          <input
                            id="oldpass"
                            type="password"
                            name="oldpass"
                            className="sign__input"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="newpass">
                            New password
                          </label>
                          <input
                            id="newpass"
                            type="password"
                            name="newpass"
                            className="sign__input"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="confirmpass">
                            Confirm new password
                          </label>
                          <input
                            id="confirmpass"
                            type="password"
                            name="confirmpass"
                            className="sign__input"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="sign__group">
                          <label className="sign__label" htmlFor="select">
                            Select
                          </label>
                          <select
                            name="select"
                            id="select"
                            className="sign__select"
                          >
                            <option value={0}>Option</option>
                            <option value={1}>Option 2</option>
                            <option value={2}>Option 3</option>
                            <option value={3}>Option 4</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="sign__btn" type="button">
                          Change
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end password form */}
              </div>
            </div>
          </div>
          {/* end content tabs */}
        </div>
      </div>
    </div>
  </main>
  {/* end main content */}

  {/* footer */}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-4 order-md-1 order-lg-4 order-xl-1">
          <div className="footer__logo">
            <img src="img/logo.svg" alt />
          </div>
          <p className="footer__tagline">
            Digital marketplace for crypto collectibles <br />
            and non-fungible tokens (NFTs). <br />
            Buy, sell, and discover exclusive digital assets.
          </p>
          <div className="footer__lang">
            <a
              className="footer__lang-btn"
              href="#"
              role="button"
              id="dropdownLang"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="img/flags/uk.svg" alt />
              <span>English</span>
            </a>
            <ul
              className="dropdown-menu footer__lang-dropdown"
              aria-labelledby="dropdownLang"
            >
              <li>
                <a href="#">
                  <img src="img/flags/spain.svg" alt />
                  <span>Spanish</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/flags/russia.svg" alt />
                  <span>Russian</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="img/flags/china.svg" alt />
                  <span>Chinese</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-1 order-md-2 order-lg-1 order-xl-2 offset-md-2 offset-lg-0">
          <h6 className="footer__title">NTF Marketplace</h6>
          <div className="footer__nav">
            <a href="explore.html">Explore</a>
            <a href="activity.html">Activity</a>
            <a href="authors.html">Authors</a>
            <a href="privacy.html">Privacy Policy</a>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-3 order-lg-2 order-md-3 order-xl-3">
          <div className="row">
            <div className="col-12">
              <h6 className="footer__title">Explore</h6>
            </div>
            <div className="col-6">
              <div className="footer__nav">
                <a href="#">Art</a>
                <a href="#">Photography</a>
                <a href="#">Games</a>
                <a href="#">Music</a>
              </div>
            </div>
            <div className="col-6">
              <div className="footer__nav">
                <a href="#">Domains</a>
                <a href="#">DeFi</a>
                <a href="#">Metaverses</a>
                <a href="#">Memes</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-2 order-lg-3 order-md-4 order-xl-4">
          <h6 className="footer__title">Community</h6>
          <div className="footer__nav">
            <a href="token.html">Unitok</a>
            <a href="blog.html">Our Blog</a>
            <a href="faq.html">Help Center</a>
            <a href="contacts.html">Contacts</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="footer__content">
            <div className="footer__social">
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z" />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5507 0.0036464H11.5624L11.5612 0L11.5507 0.0036464ZM11.5108 0.0176323L11.5507 0.0036464H11.5252L11.5108 0.0176323ZM11.5039 0.0243315L11.5108 0.0176323L11.4917 0.0243072L11.5039 0.0243315ZM11.5039 0.0243315L11.2748 0.246719C13.8446 0.975936 15.088 2.11473 15.088 2.11473C13.4318 1.30287 11.9393 0.896938 10.4467 0.732864C9.36818 0.56879 8.28967 0.65508 7.37851 0.732864H7.13058C6.54793 0.732864 5.30826 0.975936 3.64711 1.62616C3.06818 1.87287 2.73595 2.03452 2.73595 2.03452C2.73595 2.03452 3.9781 0.816724 6.71529 0.166505L6.54793 0.00243113C6.54793 0.00243113 4.47521 -0.075352 2.2376 1.54594C2.2376 1.54594 0 5.36704 0 10.0778C0 10.0778 1.23967 12.1925 4.64008 12.2727C4.64008 12.2727 5.13595 11.6249 5.63802 11.0549C3.72893 10.4861 2.98512 9.34857 2.98512 9.34857C2.98512 9.34857 3.15124 9.42878 3.40041 9.59164H3.47479C3.50979 9.59164 3.52722 9.60778 3.54568 9.62487C3.54684 9.62595 3.548 9.62702 3.54917 9.6281V9.63539C3.56901 9.65484 3.58636 9.67185 3.62355 9.67185C3.6596 9.68642 3.69564 9.70096 3.73164 9.71548C4.10416 9.8658 4.47123 10.0139 4.77645 10.158C5.35413 10.4035 6.09669 10.6478 7.00785 10.8094C8.16074 10.9735 9.48223 11.0525 10.9872 10.8094L11.0353 10.7988L11.0353 10.7988C11.7631 10.6384 12.4908 10.4779 13.2186 10.1592C13.3516 10.0923 13.4931 10.0255 13.6419 9.95511C14.0339 9.76978 14.4769 9.56038 14.9504 9.26349C14.9504 9.26349 14.2066 10.4011 12.2169 10.9699C12.626 11.5362 13.2025 12.1852 13.2025 12.1852C15.9898 12.1255 17.3804 10.6948 17.8328 10.2295C17.9325 10.1269 17.9866 10.0713 18 10.0875C18 5.38405 15.75 1.55566 15.75 1.55566C13.7464 0.097178 11.8701 0.0257804 11.5039 0.0243315ZM6.13886 5.36701C7.00663 5.36701 7.70828 6.09623 7.70828 6.98952C7.70828 7.88889 7.00167 8.61811 6.1339 8.61811C5.26613 8.61811 4.55952 7.88889 4.55952 6.99682C4.55952 6.09745 5.26613 5.37066 6.1339 5.37066L6.13886 5.36701ZM11.7707 5.36701C12.6422 5.36701 13.3451 6.09623 13.3451 6.98952C13.3451 7.88889 12.6384 8.61811 11.7707 8.61811C10.9029 8.61811 10.1963 7.88889 10.1963 6.99682C10.1988 6.09745 10.9066 5.37066 11.7707 5.37066V5.36701Z"
                  />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.07294,2H8.9375C3.33331,2,2,3.33331,2,8.92706V15.0625C2,20.66663,3.32294,22,8.92706,22H15.0625C20.66669,22,22,20.67706,22,15.07288V8.9375C22,3.33331,20.67706,2,15.07294,2Zm3.07287,14.27081H16.6875c-.55206,0-.71875-.44793-1.70831-1.4375-.86463-.83331-1.22919-.9375-1.44794-.9375-.30206,0-.38544.08332-.38544.5v1.3125c0,.35419-.11456.5625-1.04162.5625a5.69214,5.69214,0,0,1-4.44794-2.66668A11.62611,11.62611,0,0,1,5.35419,8.77081c0-.21875.08331-.41668.5-.41668H7.3125c.375,0,.51044.16668.65625.55212.70831,2.08331,1.91669,3.89581,2.40625,3.89581.1875,0,.27081-.08331.27081-.55206V10.10413c-.0625-.97913-.58331-1.0625-.58331-1.41663a.36008.36008,0,0,1,.375-.33337h2.29169c.3125,0,.41662.15625.41662.53125v2.89587c0,.3125.13544.41663.22919.41663.1875,0,.33331-.10413.67706-.44788a11.99877,11.99877,0,0,0,1.79169-2.97919.62818.62818,0,0,1,.63544-.41668H17.9375c.4375,0,.53125.21875.4375.53125A18.20507,18.20507,0,0,1,16.41669,12.25c-.15625.23956-.21875.36456,0,.64581.14581.21875.65625.64582,1,1.05207a6.48553,6.48553,0,0,1,1.22912,1.70837C18.77081,16.0625,18.5625,16.27081,18.14581,16.27081Z" />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z" />
                </svg>
              </a>
              <a href="#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z" />
                </svg>
              </a>
            </div>
            <small className="footer__copyright">
              © Unitok, 2021. Created by{" "}
              <a
                href="https://themeforest.net/user/dmitryvolkov/portfolio"
                target="_blank"
              >
                Dmitry Volkov
              </a>
              .
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}


            </div>
        )
    }
}

export default Collection