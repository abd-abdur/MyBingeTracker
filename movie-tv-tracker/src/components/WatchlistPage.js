import React from 'react';
import WatchlistItem from './WatchlistItem';

const WatchlistPage = ({ watchlist, removeFromWatchlist, showNotification }) => {
  return (
    <div>
      <h2 className="page-title">Your Watchlist</h2>
      <div className="watchlist-page">
        {watchlist.length > 0 ? (
          watchlist.map((item) => (
            <WatchlistItem
              key={item.id}
              item={item}
              removeFromWatchlist={removeFromWatchlist}
              showNotification={showNotification}
            />
          ))
        ) : (
          <p>Your watchlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;
