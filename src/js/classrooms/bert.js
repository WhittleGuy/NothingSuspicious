import React, { Component } from "react";
import Classroom from "../components/classroom";

export default class Bert extends Component {
  render() {
    return (
      <>
        <Classroom
          source=""
          name="BRT B12A"
          phone="573.341.4601"
          address="1100 N State St"
          logbook="https://docs.google.com/spreadsheets/d/1GvtEZ1UAK1mWEpMgxgKkO9bW2oTvJfJRtWQJii1dvnU/edit"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=1272452642&amp;single=true&amp;widget=true&amp;headers=false"
        />
        <Classroom
          source=""
          name="BRT B12B"
          phone="573.341.4601"
          address="1100 N State St"
          logbook="https://docs.google.com/spreadsheets/d/1iyNI_c8G2AxJpdAU9wGy12Uy2WpRkzrXGWOAh0w7hxs/edit#gid=688985503"
          summary="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSs1UJHULvglFIjId2q610XXAeywRd_-3XLacxya_uXSHtWUvF_k3TBke26vAifiMW5LigKJNFlP3c/pubhtml?gid=2041886434&amp;single=true&amp;widget=true&amp;headers=false"
        />
      </>
    );
  }
}
