import React from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';  //  src/components/SearchForm/SearchForm.jsx
import GifDisplay from '../GifDisplay/GifDisplay';
import Favorites from '../Favorites/Favorites';


function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm/>
      <GifDisplay/>
      <Favorites />

    </div>
  );
}

export default App;
