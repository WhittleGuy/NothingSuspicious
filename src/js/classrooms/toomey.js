import React, { Component } from "react";
import Classroom from "../components/classroom";

class Toomey extends Component {
  render() {
    return (
      <>
        <Classroom
          name="ME 260"
          phone="573.341.4538"
          address="400 W 13th St"
          logbook="https://docs.google.com/spreadsheets/d/1bMo14M_O4OksMbwQ0P-PLK7j2mrEQzXMT_1PjwD8d-A/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=693979290&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default Toomey;
