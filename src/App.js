import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js'
import MainArticle from './components/MainArticle/MainArticle.js'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Header />
      <MainArticle />
    </div>
  );
}

export default App;
