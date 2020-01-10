import React, { Component } from "react";
import Classroom from "../components/classroom";

class Library extends Component {
  render() {
    return (
      <>
        <Classroom
          name="LIB G14"
          phone="573.341.7673"
          address="400 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/1mWnwV0yXU3O3nFHat-xKnP2EdnxPY0KgD57b34UUSrI/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1593671970&amp;single=true&amp;widget=true&amp;headers=false"
        />
        <Classroom
          name="LIB 316"
          phone="573.341.4375"
          address="400 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/1h-iTpiWwGPyF43bpQQh5x4__nf4kEcHQWeP3leyfIRU/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1725633543&amp;single=true&amp;widget=true&amp;headers=false"
        />{" "}
      </>
    );
  }
}

export default Library;
