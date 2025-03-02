/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoutes = (props) => {
  const { children } = props;
  // Check if user exists/ is authenticated
  // if not reuturn back, because this is private route

  const { user } = useSelector((state) => state.user);
  const isAuthenticated = user?.id;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
