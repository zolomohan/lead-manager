import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) return <h2>Loding...</h2>;
      else if (!auth.isAuthenticated) return <Redirect to='/login' />;
      else return <Component {...props} />;
    }}
  />
);

export default connect(mapStateToProps)(PrivateRoute);
