//➡️shoes all the information for each command

import React, { useEffect, useState } from "react";
import { fetchStories } from "../../hooks/fetchData";
import { convertDate } from "../../hooks/dateConvertor";
import { BsFillPersonFill } from "react-icons/bs";
import "./CommentsCard.css";
import "../../App.css";
import { Link } from "react-router-dom";
import spinner from "../../images/Iphone-spinner.gif";

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
        <img className="img-loading" alt="loading" src={spinner} />
      ) : (
        commentsData.map((item, index) => (
          <div className="comment-container" key={index}>
            <div className="comment-author">
              <div>
                <BsFillPersonFill />
                <Link
                  to="/user"
                  state={{ name: item.by }}
                  style={{ color: "rgb(40, 167, 69)" }}
                >
                  {item.by}
                </Link>
              </div>
            </div>
            <p>Comment : {item.text}</p>
            {item.kids && <CommentsCard commentsIds={item.kids} />}

            <div>{convertDate(item.time)} ago</div>
          </div>
        ))
      )}
    </>
  );
};

export default CommentsCard;
