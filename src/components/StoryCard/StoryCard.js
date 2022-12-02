//➡️This component shows all the information of each story

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { convertDate } from "../../hooks/dateConvertor";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { BsFillChatTextFill, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import CommentsCard from "../CommentsCard/CommentsCard";
import { capitalizeFirstLetter } from "../../hooks/capitalizeLetter";
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
        <a href={storyData.url}>({storyData.url})</a>
      </div>
      <div className="news-details">
        <div style={{ marginRight: "10px" }}>
          <AiOutlineLike /> {storyData.score}
        </div>
        <div style={{ marginRight: "10px" }}>
          <BsFillPersonFill />
          <Link
            to="/user"
            style={{ color: "#28a745" }}
            state={{ name: storyData.by }}
          >
            {" "}
            {capitalizeFirstLetter(storyData.by)}
          </Link>
        </div>
        <div style={{ marginRight: "10px" }}>
          Posted :{convertDate(storyData.time)} ago
        </div>
        <div>{storyData.id}</div>
        <div className="show-com">
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
                {storyData.descendants} <span> Comments</span>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                {storyData.descendants}
                <span> Comments</span>
              </div>
            )}
          </div>
          <div className="comment-kids-container">
            {storyData.descendants > 0 && openComment && (
              <CommentsCard commentsIds={storyData.kids} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
