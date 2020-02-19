import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
  function onSearchSubmit(term) {
    console.log(term);
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  );
};

export default App;
