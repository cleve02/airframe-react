import React from "react";
import { Route, Switch, Redirect } from "react-router";
import HomePage from "./Screens/HomePage";
import Competitors from "./Screens/Competitors";
import Analytics from "./Screens/Analytics";
import Detail from "./Screens/Detail";
import Error404 from "./Pages/Error404";
import NavbarOnly from "./Layouts/NavbarOnly";

// ----------- Layout Imports ---------------
import { DefaultSidebar } from "./../layout/components/DefaultSidebar";

import { SidebarANavbar } from "./../layout/components/SidebarANavbar";
import { AuthProvider } from "./../contexts/AuthContext";
import { GetStarted } from "./Screens/GetStarted";
import { Login } from "./Screens/Login";
//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
  return (
    <>
      <AuthProvider>
        <Switch>
          {/* <Redirect from="/" to="/dashboards/projects" exact /> */}
          <Redirect from="/" to="/dashboard" exact />

          <Route path="/dashboard" exact component={HomePage} />
          <Route path="/competitors" exact component={Competitors} />
          <Route path="/analytics" exact component={Analytics} />
          <Route path="/detail" exact component={Detail} />
          {/*    404    */}
          <Route component={Error404} path="/pages/error-404" />
          <Redirect to="/" />
        </Switch>
      </AuthProvider>
      <Switch>
        <Route component={Error404} path="/pages/error-404" />
        <Route path="/get-started" component={GetStarted} />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
};

//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
  <>
    <AuthProvider>
      <Switch>
        {/* Default Navbar: */}
        <Route component={SidebarANavbar} />
      </Switch>
    </AuthProvider>
    <Switch>
      {" "}
      <Route component={NavbarOnly.Navbar} path="/get-started" />
      <Route component={NavbarOnly.Navbar} path="/login" />
    </Switch>
  </>
);

export const RoutedSidebars = () => (
  <>
    <AuthProvider>
      <Switch>
        {/* Default Sidebar: */}
        <Route component={DefaultSidebar} />
      </Switch>
    </AuthProvider>
    <Switch></Switch>
  </>
);
