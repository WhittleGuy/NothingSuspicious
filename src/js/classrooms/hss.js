import React, { Component } from "react";
import Classroom from "../components/classroom";

class Hss extends Component {
  render() {
    return (
      <>
        <Classroom
          name="HSS 105"
          phone="Remote"
          address="500 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/1AmTiIBeEnGdhs-6K0tVOk-rmUely5inM7SB8aXj_mvw/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=266942708&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default Hss;
