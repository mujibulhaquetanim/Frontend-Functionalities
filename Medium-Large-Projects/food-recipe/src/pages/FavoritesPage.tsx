import React from 'react'

function FavoritesPage() {
  const favorites = localStorage.getItem('favorite') || '[]';
  return (
    <div>
      <div>
        <p>My Favorites:</p>
        {favorites.length === 0 ? 'No Favorites yet' : favorites}
      </div>
    </div>
  )
}

export default FavoritesPage