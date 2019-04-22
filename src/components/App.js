import React from "react";
import SearchBar from "./SearchBar";
import VideoRequest from "../apis/VideoRequest";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  componentDidMount(){
    this.handleSearchTermSubmit("90's musics")
  }
  state = {
    videos: [],
    selectVideo: null
  };
  handleSearchTermSubmit = async searchTerm => {
    const response = await VideoRequest.get("/search", {
      params: {
        q: searchTerm
      }
    });


    this.setState({
      videos: response.data.items,
      selectVideo: response.data.items[0]
    });
  };
  handleVideoSelect = video => {
    this.setState({ selectVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar handleSearchTermSubmit={this.handleSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ui eleven wide column">
              <VideoDetails video={this.state.selectVideo} />
            </div>
            <div className="ui five wide column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
