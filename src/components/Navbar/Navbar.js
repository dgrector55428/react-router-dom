import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

import "../Navbar/Navbar.css";

import brand_logo from "../../images/brand-logo-pink-blue.png";

const Navigation = (props) => {
  var checkLocation =
    props.location === "/" ? (
      <div>
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img
              className="brandLogo"
              src={brand_logo}
              className="brand_logo"
              alt=""
            ></img>
          </NavbarBrand>
          <Nav className="ml-auto p-2" navbar>
            <NavItem>
              <Button color="info" to="">
                Logout
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    ) : (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src={brand_logo} className="brand_logo" alt=""></img>
          </NavbarBrand>
          <Nav className="ml-auto p-2" navbar>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="navbar-link"
                to="/team"
              >
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="navbar-link"
                to="/projects"
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="navbar-link"
                to="/reports"
              >
                Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                activeClassName="active"
                className="navbar-link"
                to="/reports2"
              >
                Reports2
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  return checkLocation;
};

export default Navigation;
