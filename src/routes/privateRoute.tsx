import { Navigate, Outlet } from "react-router-dom";
import { AuthenticatedLayout } from "../layouts/AuthenticatedLayout";

interface PrivateRouteProps {
  redirectTo?: string;
}

export default function PrivateRoute({ redirectTo = "/login" }: PrivateRouteProps) {
  const isAuthenticated = localStorage.getItem("authToken") !== null;

  return isAuthenticated ? (
    <AuthenticatedLayout>
      <Outlet />
    </AuthenticatedLayout>
  ) : (
    <Navigate to={redirectTo} replace />
  );
}
