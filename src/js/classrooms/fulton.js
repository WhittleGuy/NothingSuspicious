import React, { Component } from "react";
import Classroom from "../components/classroom";

class Fulton extends Component {
  render() {
    return (
      <>
        <Classroom
          name="FUL 107"
          phone="573.341.4975"
          address="301 W 14th St"
          logbook="https://docs.google.com/spreadsheets/d/10I4vqzTZX5NaFQKYQXLL_PV6AdirjY578dmovJCIRR0/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=371441586&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default Fulton;
