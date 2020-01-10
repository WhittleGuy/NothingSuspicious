import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="nav-links">
            <Link className="nav-link" to="./home">
              <i class="fa fa-home"></i>
            </Link>
            <Link className="nav-link" to="./locations">
              <i class="fa fa-map-pin"></i>
            </Link>
            <Link className="nav-link" to="./scenarios">
              <i class="fa fa-map-signs"></i>
            </Link>
            <Link className="nav-link" to="./directory">
              <i class="fa fa-address-book"></i>
            </Link>
          </div>

          <div className="nav-links__small">
            <a
              className="nav-link__small"
              href="https://github.com/WhittleGuy"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              className="nav-link__small"
              href="https://www.twitter.com/whittleguyyy"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </nav>
      </>
    );
  }
}
