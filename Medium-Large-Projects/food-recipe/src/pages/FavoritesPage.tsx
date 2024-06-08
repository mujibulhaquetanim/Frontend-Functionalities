function FavoritesPage() {
  const favorites = localStorage.getItem("favorite") || [];
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold m-3">My Favorites:</h1>
        <div className="m-3">
        {favorites.length === 0 ? "No Favorites yet" : favorites}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
