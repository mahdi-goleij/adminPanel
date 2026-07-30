import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};
