import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div
      onClick={() => handleVideoSelect(video)}
      className="video-item ui item"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt="avatar"
      />
      <div  className=" click-content content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
