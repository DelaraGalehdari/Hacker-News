//➡️shoes all the information for each command

import React, { useEffect, useState } from "react";
import { fetchStories } from "../../hooks/fetchData";
import { convertDate } from "../../hooks/dateConvertor";
import { BsFillPersonFill } from "react-icons/bs";
import "./CommentsCard.css";
import { Link } from "react-router-dom";

const CommentsCard = ({ commentsIds }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadComponents = async () => {
    setLoading(true);
    const commentsData = await fetchStories(commentsIds);
    setCommentsData(commentsData);
    setLoading(false);
  };

  useEffect(() => {
    loadComponents();
  }, []);

  return (
    <>
      {loading ? (
        <p>...Loading</p>
      ) : (
        commentsData.map((item, index) => (
          <div className="comment-container" key={index}>
            <div className="comment-author">
              <div>
                <BsFillPersonFill />
                <Link to="/user" state={{ name: item.by }}>
                  {item.by}
                </Link>
              </div>
            </div>
            <p>Comment : {item.text}</p>
            {item.kids && <CommentsCard commentsIds={item.kids} />}

            <div>{convertDate(item.time)}</div>
          </div>
        ))
      )}
    </>
  );
};

export default CommentsCard;
