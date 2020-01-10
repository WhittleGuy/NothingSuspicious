import React, { Component } from "react";
import Toggle from "./toggle";
import Modal from "./modal";

export default class Classroom extends Component {
  render() {
    return (
      <div className="classroom-card">
        <div className="classroom__image-container">
          <img src={this.props.source} alt={this.props.name} />
        </div>

        <div className="classroom__info-container">
          <h3>{this.props.name}</h3>

          <p>
            <i className="fa fa-phone-alt"></i> {this.props.phone}
          </p>

          <p>
            <i className="fa fa-map-marker-alt"></i> {this.props.address}
          </p>
        </div>

        <div className="classroom__button-container">
          <a href={this.props.logbook} className="button">
            Logbook
          </a>
          <Toggle>
            {({ on, toggle }) => (
              <>
                <button className="button" onClick={toggle}>
                  Summary
                </button>
                <Modal on={on} toggle={toggle}>
                  <iframe
                    className="room-info"
                    title={this.props.name}
                    width="90%"
                    height="400px"
                    src={this.props.summary}
                    frameborder="0"
                  />
                </Modal>
              </>
            )}
          </Toggle>
          <a
            href={
              "http://" +
              this.props.name.replace(/\s/, "") +
              "-cam-i1.device.mst.edu"
            }
            className="button"
          >
            Inst
          </a>
          <a
            href={
              "http://" +
              this.props.name.replace(/\s/, "") +
              "-cam-s1.device.mst.edu"
            }
            className="button"
          >
            Stud
          </a>
        </div>
      </div>
    );
  }
}
