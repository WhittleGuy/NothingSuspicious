import React, { Component } from "react";
import Classroom from "../components/classroom";

class EMan extends Component {
  render() {
    return (
      <>
        <Classroom
          name="EM 103"
          phone="Remote"
          address="600 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/12LmNhyjEVh7QKRhiFbri46uXAlTFG2a01MFdjKVkVpY/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1936099979&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default EMan;
