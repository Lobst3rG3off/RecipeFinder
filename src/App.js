import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {


  const APP_ID = '27d2b96c';
  const APP_KEY = 'fc78a95dae4a41c9c6d6d14f5787f383';
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


const [counter, setCounter] =  useState(0);

useEffect(() => {
  console.log('Effect has been run')
}, []);

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
           Search
           </button>
      </form>

      <h1 onClick={() => setCounter(counter + 1)}> {counter}</h1>
    </div>
  )
}


export default App;
