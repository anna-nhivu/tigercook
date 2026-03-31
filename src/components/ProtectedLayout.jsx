import { Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function ProtectedLayout() {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  );
}
