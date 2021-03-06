import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import Loader from './components/Loader'
import './App.css';

const App = () => {


  const APP_ID = '27d2b96c';
  const APP_KEY = 'fc78a95dae4a41c9c6d6d14f5787f383';
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Bread');
  const [loading, setLoading ] = useState(false);


  
useEffect(() => {
  const getRecipes = async () => {
    setLoading(true)
   const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data = await response.json();
   setRecipes(data.hits)
   setLoading(false)
  };
  getRecipes();
}, [query]);


const updateSearch = e => {
 setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return(
    <div className="App">

<div className="instructions">
  <h1> Chef Geoff's Okay Recipe Finder!</h1>
  <h2> Looking for How to Cook Something? </h2>
  <p> Search for a recipe or something that tickles your fancy! </p>
</div>

      <form onSubmit={getSearch} className="search-form">
 
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
           Search
           </button>
      </form>
      <div className="recipes">
      {loading ? <Loader/> : recipes.map(recipe =>(
        <Recipe 
        key ={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
        output={recipe.recipe.yield} 
         /> 
      ))}
      </div>
    </div>
  )
}


export default App;
