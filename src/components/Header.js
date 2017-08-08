import React from 'react';
import $ from 'jquery';
import logo from '../assets/logo.png';

class Header extends React.Component {
  scrollDown() {
    $('html,body').animate(
      {
        scrollTop: $('#starwarsContainer').offset().top,
      },
      'slow',
    );
  }
  render() {
    return (
      <header>
        <img src={logo} alt="Star Wars Title" id="heading" />
        <h1 className="wrapper">Star Wars</h1>
        <p className="arrow">
          <a onClick={() => this.scrollDown()} >
            <i className="fa fa-arrow-down" aria-hidden="true" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
