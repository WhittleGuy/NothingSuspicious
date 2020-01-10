import React, { Component } from "react";
import Classroom from "../components/classroom";

class Ece extends Component {
  render() {
    return (
      <>
        <Classroom
          name="ECE G31"
          phone="Remote"
          address="301 W 16th St"
          logbook="https://docs.google.com/spreadsheets/d/1enMCVVAKsty3RjQdMyz1_I3zUv8fYDGuBUXYRrKcMz0/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=719670707&amp;single=true&amp;widget=true&amp;headers=false"
        />
        <Classroom
          name="ECE 103"
          phone="573.341.7090"
          address="301 W 16th St"
          logbook="https://docs.google.com/spreadsheets/d/15F7uV-jAzNf6GcUP8hvlRPnCb4Q7v5prLqxepZgkOjw/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=4790009&amp;single=true&amp;widget=true&amp;headers=false"
        />
        <Classroom
          name="ECE 239"
          phone="Remote"
          address="301 W 16th St"
          logbook="https://docs.google.com/spreadsheets/d/1qzeEp70QUM4WKrNKjXv895Bu_489c2GGrZwdhxODqbE/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=676764721&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default Ece;
