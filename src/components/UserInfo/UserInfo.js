import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../hooks/fetchData";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { convertDate } from "../../hooks/dateConvertor";
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
  return (
    <>
      <div className="user-container">
        <img src={userPhoto} alt="profile" />
        <div className="user-details">
          <p>{userInfo.about}</p>
          <div>Posted {convertDate(userInfo.created)}</div>
          <div>Karma: {userInfo.karma}</div>
          <div>User Id: {userInfo.id}</div>
          <div className="btn btn-warning" onClick={handleClick}>
            Back
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;