import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ClientLayout() {
    return (
        <div className="layout">
          <div className="navbar">
            <Navbar />
          </div>
            <Outlet />
        </div>
      );
}

function RequireAuth() {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) return <Navigate to="/login" />;
    else {
      return <Outlet />;
    }
  }

export { ClientLayout, RequireAuth };