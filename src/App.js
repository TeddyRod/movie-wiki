import React, {useState} from 'react';
import WelcomeCpt from './components/WelcomeCpt';
import SearchBar from './components/SearchBar';
import List from './components/List';
import MovieDetails from './components/MovieDetails';
import ActorDetails from './components/ActorDetails';

function App() {

  const [welcomeActive, setWelcomeActive] = useState(true)
  const [currentList, setList] = useState()
  const [currentMovie, setMovie] = useState()
  const [currentActor, setActor] = useState()

  
  
  
  console.log(currentMovie);

  return (
    <div id="App">

      <section id="searchSection">
        <SearchBar setList={setList}/>
        <List currentList={currentList} setMovie={setMovie}/>
      </section>

      {!currentMovie && welcomeActive && (
        <WelcomeCpt setWelcomeActive={setWelcomeActive} />
      )}

      {currentMovie && (
        <MovieDetails currentMovie={currentMovie} setMovie={setMovie} setActor={setActor}/>
      )}

      {currentActor && (
        <ActorDetails currentActor={currentActor} setActor={setActor} setMovie={setMovie}/>
                     )}   
    </div>
  );
}

export default App;
