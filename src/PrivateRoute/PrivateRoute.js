import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <h2>Loadding....</h2>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
