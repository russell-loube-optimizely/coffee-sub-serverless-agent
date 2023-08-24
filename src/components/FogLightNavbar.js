import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../sun.png";
import LogInButton from "./LogInButton";

import React, { useState } from "react";

const FogLightNavbar = ({ signedIn, handleSignInClick }) => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Fog Light Coffee
        </Navbar.Brand>
        <LogInButton signedIn={signedIn} handleClick={handleSignInClick} />
      </Container>
    </Navbar>
  );
};

export default FogLightNavbar;
