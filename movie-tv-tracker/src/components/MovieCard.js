// MovieCard.js
import React from 'react';

const MovieCard = ({ item, onAddToWatchlist }) => {
  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
    : 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={item.title || item.name} />
      <h3>{item.title || item.name}</h3>
      <p>{item.overview}</p>
      <button onClick={() => onAddToWatchlist(item)}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
