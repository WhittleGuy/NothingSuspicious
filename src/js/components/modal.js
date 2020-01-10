import React, { Component } from "react";
import Portal from "./portal";

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;

    return (
      <Portal>
        {on && (
          <div className="modal-wrapper">
            <button className="button__small close-button" onClick={toggle}>
              Close
            </button>
            <div className="modal-content">{children}</div>
          </div>
        )}
      </Portal>
    );
  }
}
