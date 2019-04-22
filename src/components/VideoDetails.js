import React from "react";

const VideoDetails = ({ video }) => {
  return !video ? (
    <div className="ui blurring segment">
        <div className="ui grid">
          <div className="ui row">
            <div className="ui eleven wide dimmer column ">
            </div>
            <div className="ui five wide dimmer column">
            </div>
          </div>
        </div>
    </div>
  ) : (
    <div>
      <div className="ui embed">
        <iframe title='youtube player' src={videoSrc()} />
      </div>
      <div className="ui segment">
        <div className="ui header">{video.snippet.title}</div>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );

  function videoSrc() {
    return `https://www.youtube.com/embed/${video.id.videoId}`;
  }
};

export default VideoDetails;
