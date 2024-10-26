import React from 'react';
import MovieCard from './MovieCard';

const SearchResults = ({ results, onAddToWatchlist, hasSearched }) => {
  return (
    <div className="search-results">
      {results.length > 0 ? (
        results.map((item) => (
          <MovieCard key={item.id} item={item} onAddToWatchlist={onAddToWatchlist} />
        ))
      ) : (
        // Only show "No results found" if a search has been performed and there are no results
        hasSearched && <p>No results found. Try searching for a movie or TV show!</p>
      )}
    </div>
  );
};

export default SearchResults;
