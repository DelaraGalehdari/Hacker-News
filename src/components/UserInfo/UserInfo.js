import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../hooks/fetchData";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { convertDate } from "../../hooks/dateConvertor";
import striptags from "striptags";
import "./UserInfo.css";
import userPhoto from "../../images/download.png";

const UserInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await fetchUserData(name);
      setUserInfo(userData);
    };
    loadUserData();
  }, [name]);
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  const handleConvertText = (str) => {
    const data = striptags(str);
    return data.replace(/[&\\\#,+()$~%'"*?<>{}]/g, "");
  };
  return (
    <>
      <div className="user-container">
        <img src={userPhoto} alt="profile" />
        {/* <div className="user-info"> */}
        <div className="user-details">
          <p>{handleConvertText(userInfo.about)}</p>
          <div>
            <span className="title-info">Posted</span>{" "}
            {convertDate(userInfo.created)} ago
          </div>
          <div>
            <span className="title-info">Karma:</span> {userInfo.karma}
          </div>
          <div>
            <span className="title-info">User Id:</span> {userInfo.id}
          </div>
          <div className="btn btn-warning" onClick={handleClick}>
            Back
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default UserInfo;
