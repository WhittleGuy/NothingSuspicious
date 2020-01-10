import React, { Component } from "react";

export default class Employee extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="photo-container">
            <img src={this.props.source} alt={this.props.firstName} />
          </div>
          <div className="info-container">
            <h3>{this.props.firstName + " " + this.props.lastName}</h3>
            <h4>{this.props.title_one}</h4>
            <h4>{this.props.title_two}</h4>
            <p>{this.props.major}</p>
          </div>
          <div className="contact-container">
            <div className="email">
              <a href={"mailto:" + this.props.email}>
                <i className="fa fa-envelope fa"></i>
              </a>
            </div>
            <div className="phone">
              <a href={"tel:" + this.props.phone}>
                <i className="fa fa-phone-alt"></i>
                <p>{this.props.phone}</p>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
