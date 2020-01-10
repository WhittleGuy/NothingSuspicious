import React, { Component } from "react";

export default class Scenarios extends Component {
  render() {
    return (
      <div className="scenario-content">
        <h3>Local</h3>
        <iframe
          title="studio"
          className="doc"
          src="https://docs.google.com/document/d/e/2PACX-1vTRVrYTC1xEEt6JxUS1hpobj3XL5tuP8Tc_L4G5zxIxBroGKb48vsjz7qOE7FFqWPMdL1aA9P5MeU6p/pub?embedded=true"
        ></iframe>
        <h3>Remote</h3>
        <iframe
          title="remote"
          className="doc"
          src="https://docs.google.com/document/d/e/2PACX-1vQ0JtPGo2YnnSzOuX0uqX9bbzNEQ1cfJZGaU8icYRo_iIfOmtRAFbUZH6vflkSELRwqV9vBEzcW82ec/pub?embedded=true"
        ></iframe>
        <h3>DIS</h3>
        <iframe
          title="receive"
          className="doc"
          src="https://docs.google.com/document/d/e/2PACX-1vT9eWu8JAxE1CNtfMbUUda94oWjlrOpMT9FJWiTwcFQHCRP43dYsvQTrVNvCLzMlSdqR4uB0Zdy2ZxC/pub?embedded=true"
        ></iframe>
        <h3>Springfield</h3>
        <iframe
          title="springfield"
          className="doc"
          src="https://docs.google.com/document/d/e/2PACX-1vSlXbDcbjP2UkW7wzaKvwwhHsnFOjXSnDKJBEN9WQgW5rhLmmNdFst_trnhGaUYlBtpbWxmK9yGp-Qb/pub?embedded=true"
        ></iframe>
      </div>
    );
  }
}
