import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, output, url}) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            
            <img className={style.image} src={image} alt={title}/>
            <p>Total Calories is {Math.floor(calories)}</p>
            <p>Yield will be {output} servings</p>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
                
            </ul>

            <a href={url} className="search-button inner-link"> Check Out The Full Recipe! </a>

        </div>
    );
}

export default Recipe;