import React, { Component } from "react";
import Classroom from "../components/classroom";

class Cent extends Component {
  render() {
    return (
      <>
        <Classroom
          name="CH 105"
          phone="Remote"
          address="300 W 12th St"
          logbook="https://docs.google.com/spreadsheets/d/1enMCVVAKsty3RjQdMyz1_I3zUv8fYDGuBUXYRrKcMz0/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1877700745&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default Cent;
