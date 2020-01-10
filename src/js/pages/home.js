import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="home-header">
          <h1>IT Process Support</h1>
        </div>
        <div className="home-info">
          <div className="text-container">
            <h3>Who We Are</h3>
            <p>
              Process Support consists of four full-time staff members, with the
              majority of our staff being student producers.
            </p>
            <p>
              We produce technical documentation, coordinate the hiring and
              scheduling of student producers, and design training for the
              department.
            </p>
            <p>
              Members of Process Support work all over campus, with most
              operating out of control rooms. Process Support also boasts
              top-tier remote producers, regularly running doubles out of
              modified classrooms, and testing new forms of production.
            </p>
            <h3>Zoom Support</h3>
            <p>
              Process Support manages all Zoom support that the IT Help Desk
              cannot resolve.
              <br />
              Usually, issues with Zoom can be solved by directing the
              complainant to the{" "}
              <a href="https://zoom.us/test">
                Zoom Test Meeting <i className="fas fa-external-link-alt"></i>
              </a>
              .<br />
              Additional help can be found at{" "}
              <a href="https://support.zoom.us/hc/en-us">
                Zoom Support <i className="fas fa-external-link-alt"></i>
              </a>
              . Logging into zoom.us also gives you access to live help chat
              with a Zoom tech support agent.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
