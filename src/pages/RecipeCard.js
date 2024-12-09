const RecipeCard = React.memo(({ recipe }) => {
  // This component will only re-render when `recipe` changes
  return (
    <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Link to={`/recipe/${recipe._id}`} className="block">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-4xl lg:text-3xl font-semibold text-center mb-4 text-blue-500 hover:text-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg font-serif tracking-wider">
            {recipe.name}
          </h2>
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-40 h-40 object-cover rounded-lg mb-6"
            loading="lazy"
          />
          <p className="text-sm text-gray-600 mb-4 text-center">
            {recipe.description}
          </p>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Cooking Time: {recipe.cookingTime} minutes
          </p>
        </div>
      </Link>
    </div>
  );
});
