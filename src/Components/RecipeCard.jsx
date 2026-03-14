import "../CSS/RecipeCard.css";

function RecipeCard({recipe}) {
    return (
        <div className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.name}/>
            <div className="contents">
                <h3>{recipe.weekday}</h3>
                <h2>{recipe.name}</h2>
            </div>
        </div>
    )
}

export default RecipeCard;