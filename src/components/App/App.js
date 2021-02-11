import React from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';  //  src/components/SearchForm/SearchForm.jsx
import GifDisplay from '../GifDisplay/GifDisplay';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm/>
      <GifDisplay/>
    </div>
  );
}

export default App;
