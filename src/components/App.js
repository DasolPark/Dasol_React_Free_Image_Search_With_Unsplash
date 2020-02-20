import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Spinner from './Spinner';

class App extends React.Component {
  state = { images: [], searching: false };

  onSearchSubmit = async term => {
    this.setState({ searching: true });
    try {
      const response = await unsplash.get('/search/photos/', {
        params: { query: term, per_page: 30 }
      });
      this.setState({ images: response.data.results });
      this.setState({ searching: false });
    } catch (error) {
      console.log(error);
    }
  };

  renderContent() {
    if (this.state.images.length && this.state.searching === false) {
      return <ImageList images={this.state.images} />;
    }

    if (this.state.searching === true) {
      return <Spinner />;
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
