import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./VideoCard";
import videos from "./videos";


function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h1>Recommended</h1>

      <div className="recommendedVideos__videos">
        {videos.map((videoDetails) => (
          <VideoCard {...videoDetails} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
