import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Login/Login.css";

const Logout = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="form-inline">
        <button
          className="btn btn-outline-info logout-btn"
          aria-pressed="true"
          onClick={() => logout()}
        >
          Log Out
        </button>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Logout;
