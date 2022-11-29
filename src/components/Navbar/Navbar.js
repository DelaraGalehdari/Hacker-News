import React from "react";
import DropDownButton from "../DropDownButton/DropDownButton";

import Login from "../Login/Login";
import Logout from "../Login/Logout";
import "./Navbar.css";

const Navbar = ({ handleStoryType }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <form className="form-inline form-group">
          <a className="navbar-brand" id="navbar-text" href="/">
            Hacker News
          </a>
        </form>
        <form className="form-inline">
          <DropDownButton handleStoryType={handleStoryType} />
          <Login />
          <Logout />
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
