function RecipeCard(recipe) {
    return (
        <div className="recipe-card">
            <h3>recipe.weekday</h3>
            <div className="image+overlay">
                <img src={recipe.image} alt={recipe.name} />
                <h2>recipe.name</h2>
            </div>
        </div>
    )
}

export default RecipeCard;