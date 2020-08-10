import React from "react";
import { Row, Col, Button } from "reactstrap";

import background from "../../images/vector-graphic.jpg";
import "../Splash/Splash.css";

const Splash = () => {
  return (
    <div>
      <Row>
        <Col
          md="6"
          className="d-flex align-items-center justify-content-center"
        >
          <Row style={{ marginBottom: "100px" }}>
            <Col
              md="12"
              className="d-flex align-items-center justify-content-center"
            >
              <h1 style={{ textAlign: "center" }}>
                Welcome, <br />
                IT!
              </h1>
            </Col>
            <Col
              md="12"
              className="d-flex align-items-center justify-content-center"
            >
              <Button href="/team" className="splashBtn" color="warning">
                Team
              </Button>
              <Button href="/projects" className="splashBtn" color="secondary">
                Projects
              </Button>
            </Col>
          </Row>
        </Col>
        <Col
          md="6"
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src={background}
            alt="splash page vector graphic"
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Splash;
