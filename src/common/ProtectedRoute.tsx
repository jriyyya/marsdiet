import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export enum ProtectedTypes {
  PRIVATEONLY,
  PUBLICONLY,
}

interface ProtectedRouteProps {
  type: ProtectedTypes;
}

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth0();

  const auth = isAuthenticated;

  if (props.type === ProtectedTypes.PRIVATEONLY) {
    return auth ? <Outlet /> : <Navigate to="/auth" />;
  }

  if (props.type === ProtectedTypes.PUBLICONLY) {
    return !auth ? <Outlet /> : <Navigate to="/dashboard" />;
  }

  return <Navigate to="/" />;
}
