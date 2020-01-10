import React, { Component } from "react";
import Classroom from "../components/classroom";

class McNutt extends Component {
  render() {
    return (
      <>
        <Classroom
          name="MCN 216"
          phone="Remote"
          address="1400 North Bishop"
          logbook="https://docs.google.com/spreadsheets/d/1enMCVVAKsty3RjQdMyz1_I3zUv8fYDGuBUXYRrKcMz0/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=983302159&amp;single=true&amp;widget=true&amp;headers=false"
        />
        <Classroom
          name="MCN 265"
          phone="Remote"
          address="1400 North Bishop"
          logbook="https://docs.google.com/spreadsheets/d/1enMCVVAKsty3RjQdMyz1_I3zUv8fYDGuBUXYRrKcMz0/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=252622591&single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default McNutt;
