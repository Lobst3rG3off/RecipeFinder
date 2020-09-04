import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            
            <img src={image} alt={title}/>
            <p>The number of Calories is {calories}</p>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe;