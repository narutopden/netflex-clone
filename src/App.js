import React from 'react';
import './App.css';
import Row from './Row';
import rqs from './request';

function App() {
  return (
    <div className="App">
     <h1>let build the netflix clone app</h1>
     <Row s title="NETFLIX ORIGINALS" fetchURL={rqs.fetchNetflixOriginal}  />
     <Row title="Trending Now" fetchURL={rqs.fetchTrenting}/>
     {/* <Row title="new Movies"   fetchURL={rqs.fetchActionMovies}/> */}
    </div>
  );
}

export default App;

