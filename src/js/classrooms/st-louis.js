import React, { Component } from "react";
import Classroom from "../components/classroom";

class StLouis extends Component {
  render() {
    return (
      <>
        <Classroom
          name="STL 210"
          phone="573.341.6152"
          address="12837 Flushing Meadows Dr"
          logbook="https://docs.google.com/spreadsheets/d/1lMrVVGcgw5EFEoviK5gpfdEUXTroTyB67wtn_Q0c7A4/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=646532313&amp;single=true&amp;widget=true&amp;headers=false"
        />

        <Classroom
          name="STL 211"
          phone="573.341.6148"
          address="12837 Flushing Meadows Dr"
          logbook="https://docs.google.com/spreadsheets/d/1FBetNc3zdgejz-v0065Z6RjIBXyqPBEqIdtQ9120fEc/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1778121514&amp;single=true&amp;widget=true&amp;headers=false"
        />

        <Classroom
          name="STL 212"
          phone="573.341.6145"
          address="12837 Flushing Meadows Dr"
          logbook="https://docs.google.com/spreadsheets/d/1G68ptd3_pr5CUU_SvlQysl4FZCjFRJsqoFHChW5IUbY/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=577442612&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}

export default StLouis;
