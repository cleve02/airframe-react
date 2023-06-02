import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withPageConfig } from "../../components/Layout/withPageConfig";
import { Container } from "./../../components";

import {
  Form,
  FormGroup,
  FormText,
  Input,
  CustomInput,
  Button,
  Label,
  EmptyLayout,
  ThemeConsumer,
} from "./../../components";

import { HeaderAuth } from "../components/Pages/HeaderAuth";
import { FooterAuth } from "../components/Pages/FooterAuth";

class NavbarOnly extends React.Component {
  static propTypes = {
    pageConfig: PropTypes.object,
  };

  componentDidMount() {
    const { pageConfig } = this.props;

    pageConfig.setElementsVisibility({
      sidebarHidden: true,
    });
  }

  componentWillUnmount() {
    const { pageConfig } = this.props;

    pageConfig.setElementsVisibility({
      sidebarHidden: false,
    });
  }

  render() {
    return (
      <Container>
        <EmptyLayout.Section center>
          {/* START Header */}
          <HeaderAuth title="Sign In to Application" />
          {/* END Header */}
          {/* START Form */}
          <Form className="mb-3">
            <FormGroup>
              <Label for="emailAdress">Email Adress</Label>
              <Input
                type="email"
                name="email"
                id="emailAdress"
                placeholder="Enter email..."
                className="bg-white"
              />
              <FormText color="muted">
                We&amp;ll never share your email with anyone else.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password..."
                className="bg-white"
              />
            </FormGroup>
            <FormGroup>
              <CustomInput
                type="checkbox"
                id="rememberPassword"
                label="Remember Password"
                inline
              />
            </FormGroup>
            <ThemeConsumer>
              {({ color }) => (
                <Button color={color} block tag={Link} to="/">
                  Sign In
                </Button>
              )}
            </ThemeConsumer>
          </Form>
          {/* END Form */}
          {/* START Bottom Links */}
          <div className="d-flex mb-5">
            <Link to="/pages/forgotpassword" className="text-decoration-none">
              Forgot Password
            </Link>
            <Link to="/pages/register" className="ml-auto text-decoration-none">
              Register
            </Link>
          </div>
          {/* END Bottom Links */}
          {/* START Footer */}
          <FooterAuth />
          {/* END Footer */}
        </EmptyLayout.Section>
      </Container>
    );
  }
}

const ExtendedNavbarOnly = withPageConfig(NavbarOnly);

export { ExtendedNavbarOnly as Login };
