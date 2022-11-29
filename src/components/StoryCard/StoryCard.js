//➡️This component shows all the information of each story

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { convertDate } from "../../hooks/dateConvertor";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { BsFillChatTextFill, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import CommentsCard from "../CommentsCard/CommentsCard";
import "./StoryCard.css";

const StoryCard = ({ storyData }) => {
  //➡️define state
  const [openComment, setOpenComment] = useState(false);

  return (
    <div className="stort-container">
      <div className="story-link">
        <p>
          <BsFillChatTextFill /> {storyData.title}
        </p>
        <a href={storyData.url}>{storyData.url}</a>
      </div>

      <div style={{ marginRight: "10px" }}>
        <AiOutlineLike /> {storyData.score}
      </div>
      <div style={{ marginRight: "10px" }}>
        <BsFillPersonFill />
        <Link to="/user" state={{ name: storyData.by }}>
          {storyData.by}
        </Link>
      </div>
      <div>Posted :{convertDate(storyData.time)}</div>
      <div className="d-flex flex-row story-info">
        {storyData.descendants > 0 ? (
          <div
            style={{ marginRight: "10px" }}
            onClick={() => {
              setOpenComment(!openComment);
            }}
          >
            {openComment ? (
              <MdOutlineArrowDropDown />
            ) : (
              <MdOutlineArrowDropUp />
            )}
            {storyData.descendants} Comments
          </div>
        ) : (
          <div style={{ marginRight: "10px" }}>
            {storyData.descendants} Comments
          </div>
        )}
        <div className="test">
          {storyData.descendants > 0 && openComment && (
            <CommentsCard commentsIds={storyData.kids} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
