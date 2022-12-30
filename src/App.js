import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
     
    </div>
  );
}

export default App;

//first commit after dependancy fail (fail: 12/28/22 - 12/29/22 approx 4:30pm) 12/30/22 5:23pm