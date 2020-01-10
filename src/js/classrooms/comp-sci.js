import React, { Component } from "react";
import Classroom from "../components/classroom";

class CompSci extends Component {
  render() {
    return (
      <>
        <Classroom
          name="CS 209"
          phone="573.341.6255"
          address="500 W 15th St"
          logbook="https://docs.google.com/spreadsheets/d/1_gaMjkRB6rPC7JZflK60ZA4PxU9VklbxYArGz6Kvz44/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=590437178&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default CompSci;
