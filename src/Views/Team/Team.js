import React from "react";
import EmployeeCard from "../../components/Card/Card";
import { Row, Col } from "reactstrap";

const Team = (props) => (
  <div>
    <Row>
      <Col md="12">
        <h1>Meet your Inside Edge Team!</h1>
      </Col>
      <Col md="12">
        {" "}
        <EmployeeCard />
      </Col>
    </Row>
  </div>
);

export default Team;
