//➡️ All the functions for fetching data from Api

import axios from "axios";

const HN_Uri = "https://hacker-news.firebaseio.com/v0";

//➡️ Fetch All the stories ids from api
export const fetchTopstoriesIds = async (type) => {
  const response = await axios.get(`${HN_Uri}/${type}stories.json`);
  const topStoriesIds = await response.data;
  return topStoriesIds;
};

//➡️fetch stroy based of id from api
export const fetchStory = async (id) => {
  const response = await axios.get(`${HN_Uri}/item/${id}.json`);
  const storyData = await response.data;

  return storyData;
};

//➡️fetch all the stories data
export const fetchStories = async (ids) => {
  const storiesData = await Promise.all(ids.map(fetchStory));
  return storiesData;
};

//➡️fetching user data from api based of user's name
export const fetchUserData = async (name) => {
  const response = await axios.get(`${HN_Uri}/user/${name}.json`);
  const userData = await response.data;
  return userData;
};
