import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit(e) {
    e.preventDefault();

    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui fluid category search">
        <form
          className="ui icon input"
          onSubmit={this.onFormSubmit}
          style={{ width: '100%' }}
        >
          <input
            className="prompt"
            type="text"
            placeholder="Search images..."
            onChange={e => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
          <i className="search icon"></i>
        </form>
        <div className="results"></div>
      </div>
    );
  }
}

export default SearchBar;
