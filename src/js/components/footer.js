import React, { Component } from "react";
import TwitterTag from "./twitter";
import Toggle from "./toggle";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Toggle>
          {({ on, toggle }) => (
            <button className="button" onClick={toggle}>
              Contact
            </button>
          )}
        </Toggle>
        <TwitterTag user="whittleguyyy" />
        <a className="button" href="http://web.mst.edu/~vccstaff/">
          Reference
        </a>
      </div>
    );
  }
}
