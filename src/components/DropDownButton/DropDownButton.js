import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "react-dropdown/style.css";

const DropDownButton = ({ handleStoryType }) => {
  const [storyType, setStoryType] = useState("new");
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    handleStoryType(storyType);
  }, [storyType]);

  return (
    isAuthenticated && (
      <label>
        <select
          className="btn btn-outline-info "
          value={storyType}
          onChange={(e) => setStoryType(e.target.value)}
          style={{ padding: "9px 12px" }}
        >
          <option value="new" selected>
            New Storiest
          </option>
          <option value="top">Top Stories</option>
          <option value="best">Best Stories</option>
        </select>
      </label>
    )
  );
};

export default DropDownButton;
