import React from 'react';

const WatchlistItem = ({ item, removeFromWatchlist, showNotification }) => {
  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
    : 'https://via.placeholder.com/200x300?text=No+Image';

  const handleRemove = () => {
    removeFromWatchlist(item.id);
    showNotification("Movie removed from watchlist!"); // Show remove notification
  };

  return (
    <div className="watchlist-item">
      <img src={imageUrl} alt={item.title || item.name} />
      <h3>{item.title || item.name}</h3>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default WatchlistItem;
