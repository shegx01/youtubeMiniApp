import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

    handleInputChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearchTermSubmit(this.state.searchTerm)
    };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>video search</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
