// Watchlist.js
import React from 'react';
import WatchlistItem from './WatchlistItem';

const Watchlist = ({ watchlist, removeFromWatchlist }) => {
  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      {watchlist.length > 0 ? (
        watchlist.map((item) => (
          <WatchlistItem key={item.id} item={item} removeFromWatchlist={removeFromWatchlist} />
        ))
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default Watchlist;
