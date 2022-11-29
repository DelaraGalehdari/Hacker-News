import React, { useState } from "react";
import Stories from "./components/Stories/Stories";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar/Navbar";
import UserInfo from "./components/UserInfo/UserInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const { isLoading } = useAuth0();
  const [storyType, setStoryType] = useState("");
  const handleStoryType = (storyTypeName) => {
    setStoryType(storyTypeName);
  };

  if (isLoading) return <div>...Loading</div>;
  return (
    <div className="App">
      <Navbar handleStoryType={handleStoryType} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Stories storyType={storyType} />} />
          <Route path="/user" element={<UserInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
