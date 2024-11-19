import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";
import Loading from "../pages/Loading";

const PrivateRoute = ({ element, ...rest }) => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <Loading />;
  }

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
