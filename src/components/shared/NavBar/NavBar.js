import React from 'react';
import './NavBar.scss';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const buildNavBar = () => {
      if (authed) {
        return (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Boards</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/board/New">New Board</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={this.logMeOut}>Log Me Out</button>
            </li>
          </ul>
        );
      }
      return (<ul className="navbar-nav ml-auto"></ul>);
    };
    return (
      <div className="Navbar">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Pinterest</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      { buildNavBar() }
    </div>
  </nav>
</div>
    );
  }
}

export default NavBar;
