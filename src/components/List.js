import React from 'react';

function List(props) {
    const recipe = props.item.recipe;
    return (
        <div className="list-item">
            <div className="list-left">
                <img src={recipe.image} alt="dish" />
            </div>
            <div className="list-right">
                <h1>{recipe.label}</h1>
                <p>Calories: {Math.round(recipe.calories)}Kcal</p>
                <div className="labels">
                    <div className="label1">
                        <h3>Ingredients:</h3>
                        {recipe.ingredientLines.map((label, index) => <p key={index}>{label}</p>)}
                    </div>
                </div>
                <a href={recipe.url} rel="noopener noreferrer" target="_blank">Read More</a>
            </div>
        </div>
    )
}


export default List
