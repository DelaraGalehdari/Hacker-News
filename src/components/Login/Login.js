import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  //➡️define authentication
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        className="btn btn-outline-info"
        aria-pressed="true"
      >
        Log In
      </button>
    )
  );
};

export default Login;
