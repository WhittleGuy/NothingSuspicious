import React, { Component } from "react";
import Employee from "../components/employee";

import Brandon from "../../images/Brandon.png";
import Paige from "../../images/Paige.png";
import Luna from "../../images/Luna.png";

export default class Directory extends Component {
  render() {
    return (
      <div className="employee-container">
        <div className="employee-class">
          <div className="class-title">
            <h1>Staff</h1>
          </div>
          <div className="members">
            <Employee
              firstName="Paige"
              lastName="Eissinger"
              source={Paige}
              email="eissingers@mst.edu"
              phone="573.341.4667"
              title_one="Student Coordinator"
              title_two="Senior Media Producer"
            />
            <Employee
              firstName="Josh"
              lastName="Gray"
              source=""
              email="grayjo@mst.edu"
              phone="573.341.4667"
              title_one="Faculty Liaison"
              title_two="Media Producer II"
            />
            <Employee
              firstName="Jonathan"
              lastName="Goad"
              source=""
              email="goadj@mst.edu"
              phone="573.341.4667"
              title_one="Robot"
              title_two="Media Producer II"
            />
            <Employee
              firstName="Brandon"
              lastName="Whittle"
              source={Brandon}
              email="bwwmb6@mst.edu"
              phone="573.341.4667"
              title_one="Junior Student Coordinator"
              title_two="Media Producer I"
              major="Environmental Engineering"
            />
          </div>
        </div>
        <div className="divider">
          <span></span>
        </div>
        <div className="employee-class">
          <div className="class-title">
            <h1>Students</h1>
          </div>
          <div className="members">
            <Employee
              firstName="Lake"
              lastName="McGinty"
              source=""
              email="lcmtx7@mst.edu"
              major="Mechanical Engineering"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Noah"
              lastName="Smith"
              source=""
              email="ns6m2@mst.edu"
              major="Electrical Engineering"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Luna"
              lastName="Spring"
              source={Luna}
              email="lssz85@mst.edu"
              major="Engineering Management"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Zvezda"
              lastName="Spring"
              source=""
              email="zesgf4@mst.edu"
              major="Computer Engineering"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Emma"
              lastName="Gilham"
              source=""
              email="esgtk7@mst.edu"
              major="Environmental Engineering"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Andrea"
              lastName="Biasella"
              source=""
              email="amb56q@mst.edu"
              major="Computer Engineering"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Luis"
              lastName="Deloria"
              source=""
              email="lad2cd@mst.edu"
              major="Computer Science"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Charnise"
              lastName="Anderson"
              source=""
              email="cmab2y@mst.edu"
              major="Technical Communication"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />

            <Employee
              firstName="Darin"
              lastName="Aranjo"
              source=""
              email="da5x8@mst.edu"
              major="Information Science & Technology"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Seth"
              lastName="Gudeman"
              source=""
              email="smgvkc@mst.edu"
              major="Mechanical Engineering"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Justin"
              lastName="Hackman"
              source=""
              email="jdh7y5@mst.edu"
              major="Civil Engineering"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Jacob"
              lastName="Homann"
              source=""
              email="jhh356@mst.edu"
              major="Mechanical Engineering"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
            <Employee
              firstName="Brooke"
              lastName="Reed"
              source=""
              email="bnr4kx@mst.edu"
              major="Multidisciplinary Studies"
              phone="Unavailable"
              title_one="Student Producer"
              title_two=""
            />
          </div>
        </div>
      </div>
    );
  }
}
