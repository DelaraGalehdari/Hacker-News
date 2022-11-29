import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchTopstoriesIds, fetchStories } from "../../hooks/fetchData";
import StoryCard from "../StoryCard/StoryCard";
import PaginateStories from "../PaginateStories/PaginateStories";
import "./AllNews.css";
import WelcomePage from "../WelcomePage/WelcomePage";

const Stories = ({ storyType }) => {
  //➡️All the states

  const { isAuthenticated } = useAuth0();
  const [stories, setStories] = useState([]);
  const [topStoriesIds, setTopStoriesIds] = useState([]);
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(10);

  //➡️Fetch data
  const loadStories = async () => {
    const topStoriesIdsData = await fetchTopstoriesIds(storyType);
    setTopStoriesIds(topStoriesIdsData);
    const storiesData = await fetchStories(
      topStoriesIdsData.slice(startOffset, endOffset)
    );
    setStories(storiesData);
  };

  useEffect(() => {
    loadStories();
  }, [storyType, startOffset, endOffset]);

  //➡️define start and end number of stories for paginations
  const handlePage = (min, max) => {
    setStartOffset(min);
    setEndOffset(max);
  };

  return isAuthenticated ? (
    <div>
      <PaginateStories
        topStoriesIds={topStoriesIds}
        handlePage={handlePage}
        allStories={stories}
      />
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

export default Stories;
