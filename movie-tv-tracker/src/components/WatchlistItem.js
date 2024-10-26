// WatchlistItem.js
import React from 'react';

const WatchlistItem = ({ item, removeFromWatchlist }) => {
  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
    : 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <div className="watchlist-item">
      <img src={imageUrl} alt={item.title || item.name} />
      <h3>{item.title || item.name}</h3>
      <button onClick={() => removeFromWatchlist(item.id)}>Remove</button>
    </div>
  );
};

export default WatchlistItem;
