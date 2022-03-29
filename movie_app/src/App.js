import './App.scss';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { MovieDetails } from './components/movieDetails/movieDetails';
import { NotFound } from './components/pageNotFound/notFound';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/homepage/home';
function App() { 
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <div className="container">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
        <Route element={<NotFound/>}/>
        
        </Routes>
      </div>

        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
