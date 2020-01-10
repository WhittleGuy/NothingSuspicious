import React, { Component } from "react";
import TwitterTag from "./twitter";
import Toggle from "./toggle";
import Modal from "./modal";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Toggle>
          {({ on, toggle }) => (
            <>
              <button className="button" onClick={toggle}>
                Contact
              </button>
              <Modal on={on} toggle={toggle}>
                <form action="https://formspree.io/xdoaqlvj" method="POST">
                  <div className="name">
                    <input type="text" name="name" autoComplete="on" required />
                    <label htmlFor="name" className="label-name">
                      <span className="content-name">Name</span>
                    </label>
                  </div>
                  <div className="email">
                    <input
                      type="email"
                      name="_replyto"
                      autoComplete="on"
                      required
                    />
                    <label htmlFor="email" className="label-email">
                      <span className="content-email">Email</span>
                    </label>
                  </div>
                  <div className="message">
                    <textarea name="message" required></textarea>
                    <label htmlFor="message" className="label-message">
                      <span className="content-message">Message</span>
                    </label>
                  </div>
                  <div className="submit-button-field">
                    <input
                      className="submit-btn button__small"
                      type="submit"
                      value="Send"
                    ></input>
                  </div>{" "}
                </form>
              </Modal>
            </>
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
