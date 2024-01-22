import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AppMiddleware = ({ children, middleware }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  const middlewareScope = ["auth", "public"];

  if (!middlewareScope.includes(middleware)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (middleware === "auth" && !auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (middleware === "public" && auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

AppMiddleware.propTypes = {
  children: PropTypes.element.isRequired,
  middleware: PropTypes.string.isRequired,
};

export default AppMiddleware;

// by: Sarif Hidayatullah
