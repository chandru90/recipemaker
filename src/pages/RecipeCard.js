const RecipeCard = React.memo(({ recipe }) => {
  return (
    <div className="bg-white/90 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300">
      <Link to={`/recipe/${recipe._id}`} className="block">
        <div className="flex flex-col items-center mb-4">
          
          <h2 className="text-xl font-semibold text-center mb-3 text-blue-500 hover:text-blue-600 transition">
            {recipe.name}
          </h2>

          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-40 h-40 object-cover rounded-lg mb-4"
            loading="lazy"
          />

          {/* Instructions fix */}
          {Array.isArray(recipe.instructions) ? (
            <ul className="text-sm text-gray-600 mb-3 text-left list-disc list-inside">
              {recipe.instructions.slice(0, 3).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600 mb-3 text-center line-clamp-3">
              {recipe.instructions || "No instructions available"}
            </p>
          )}

          <p className="text-xs text-gray-500">
            Cooking Time: {recipe.cookingTime} mins
          </p>
        </div>
      </Link>
    </div>
  );
});