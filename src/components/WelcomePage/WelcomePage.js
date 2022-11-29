import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./WelcomePage.css";

const WelcomePage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="welcome-container">
      <h4>Welcome to Hacker News</h4>
      <p>
        HN is a news website. As a rule, a community site that becomes popular
        will decline in quality. Our hypothesis is that this is not
        inevitable—that by making a conscious effort to resist decline, we can
        keep it from happening.
      </p>
      <p>You need to log in to see all the news</p>
      <button
        onClick={() => loginWithRedirect()}
        className="btn btn-outline-info"
      >
        Log in
      </button>
    </div>
  );
};

export default WelcomePage;
