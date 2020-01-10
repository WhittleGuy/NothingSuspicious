import React, { Component } from "react";
import Bert from "../classrooms/bert";
import ButlerCarlton from "../classrooms/butler-carlton";
import Cent from "../classrooms/cent";
import CompSci from "../classrooms/comp-sci";
import EMan from "../classrooms/e-man";
import Ece from "../classrooms/ece";
import Fulton from "../classrooms/fulton";
import Hss from "../classrooms/hss";
import Library from "../classrooms/library";
import McNutt from "../classrooms/mcnutt";
import Springfield from "../classrooms/springfield";
import StLouis from "../classrooms/st-louis";
import Toomey from "../classrooms/toomey";

export default class Locations extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="locations-container">
          <div className="card-container">
            <Bert />
            <ButlerCarlton />
            <Cent />
            <CompSci />
            <EMan />
            <Ece />
            <Fulton />
            <Hss />
            <Library />
            <McNutt />
            <Springfield />
            <StLouis />
            <Toomey />
          </div>
        </div>
      </div>
    );
  }
}
