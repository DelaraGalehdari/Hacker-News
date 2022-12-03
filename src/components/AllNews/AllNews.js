import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchTopstoriesIds, fetchStories } from "../../hooks/fetchData";
import StoryCard from "../StoryCard/StoryCard";
import PaginateStories from "../PaginateStories/PaginateStories";
import WelcomePage from "../WelcomePage/WelcomePage";
import "./AllNews.css";
import "../../App.css";

const AllNews = ({ storyType }) => {
  //All the states
  const { isAuthenticated } = useAuth0();
  const [stories, setStories] = useState([]);
  const [topStoriesIds, setTopStoriesIds] = useState([]);
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(10);

  //Fetch data
  const loadStories = async () => {
    try {
      if (storyType) {
        const topStoriesIdsData = await fetchTopstoriesIds(storyType);
        setTopStoriesIds(topStoriesIdsData);
        const storiesData = await fetchStories(
          topStoriesIdsData.slice(startOffset, endOffset)
        );
        setStories(storiesData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadStories();
    }
  }, [storyType, startOffset, endOffset]);

  //➡️define start and end number of stories for paginations
  const handlePage = (minIndex, maxIndex) => {
    setStartOffset(minIndex);
    setEndOffset(maxIndex);
  };

  return isAuthenticated ? (
    <div>
      <PaginateStories topStoriesIds={topStoriesIds} handlePage={handlePage} />
      <div className="news-container border border-success border-design">
        {stories.map((story, index) => (
          <div key={index}>
            <StoryCard storyData={story} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <WelcomePage />
  );
};

export default AllNews;
