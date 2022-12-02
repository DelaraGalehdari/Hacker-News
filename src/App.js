import React, { useState } from "react";
import AllNews from "./components/AllNews/AllNews";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar/Navbar";
import UserInfo from "./components/UserInfo/UserInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import spinner from "../src/images/Iphone-spinner.gif";

function App() {
  const { isLoading } = useAuth0();
  const [storyType, setStoryType] = useState("");
  const handleStoryType = (storyTypeName) => {
    setStoryType(storyTypeName);
  };

  if (isLoading)
    return <img className="img-loading" alt="loading" src={spinner} />;
  return (
    <div className="App">
      <Navbar handleStoryType={handleStoryType} />
      <Router>
        <Routes>
          <Route exact path="/" element={<AllNews storyType={storyType} />} />
          <Route path="/user" element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
