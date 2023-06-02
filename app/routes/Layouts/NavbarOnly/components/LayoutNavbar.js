import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "./../../../../components";
import { LogoThemed } from "./../../../components/LogoThemed/LogoThemed";

export const LayoutNavbar = () => (
  <React.Fragment>
    <Navbar light expand="lg" themed>
      <Link to="/" className="navbar-brand mr-0 mr-sm-3">
        <LogoThemed className="mb-1" checkBackground />
      </Link>

      {/* END Navbar: Left Side */}
      {/* START Navbar: Right Side */}
      <Nav className="ml-auto" pills>
        <Link to="/get-started">
          <Button color="primary" className="px-4 my-sm-0 mr-4">
            Get Started
          </Button>
        </Link>
        <Link to="/login" className="nav-link">
          Log-in
        </Link>
      </Nav>
      {/* END Navbar: Right Side */}
    </Navbar>
  </React.Fragment>
);
