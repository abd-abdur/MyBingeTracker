// Import necessary modules and components.
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import WatchlistPage from './components/WatchlistPage';
import { searchTMDb } from './api/tmdbApi';
import './App.css';

const App = () => {
  // State to store search results.
  const [results, setResults] = useState([]);
  
  // State to manage the watchlist initializing from `localStorage` to persist data across sessions.
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  // State to track if a search has been made (to conditionally render UI).
  const [hasSearched, setHasSearched] = useState(false);
  
  // State to manage notification messages.
  const [notification, setNotification] = useState('');

  // Effect to save the watchlist to `localStorage` whenever it changes.
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  /**
   * Handles search input by querying TMDb and updating the results.
   * @param {string} query - The search query input by the user.
   */
  const handleSearch = async (query) => {
    const data = await searchTMDb(query);
    setResults(data);
    setHasSearched(true);
  };

  /**
   * Adds an item to the watchlist if it's not already present.
   * Displays a notification upon successful addition.
   * @param {Object} item - The movie or TV show to be added to the watchlist.
   */
  const addToWatchlist = (item) => {
    if (!watchlist.some((watchItem) => watchItem.id === item.id)) {
      setWatchlist((prevList) => [...prevList, item]);
      showNotification("Movie successfully added to the watchlist!");
    }
  };

  /**
   * Removes an item from the watchlist based on its ID.
   * @param {number} id - The ID of the movie or TV show to be removed.
   */
  const removeFromWatchlist = (id) => {
    setWatchlist((prevList) => prevList.filter((item) => item.id !== id));
    showNotification("Movie removed from watchlist!"); // Notification for removal
  };

  /**
   * Displays a temporary popup notification with a given message.
   * @param {string} message - The message to show in the notification.
   */
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 1500);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>
            <a href="/" className="logo">BingeTracker</a>
          </h1>
          <nav>
            <Link to="/watchlist" className="nav-link">Your Watchlist</Link>
          </nav>
        </header>
        <main className="content">
          {/* Show popup notifications if there is a message */}
          {notification && <div className="popup-notification">{notification}</div>}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h2 className="page-title">Find your favorite movies and TV shows</h2>
                  <SearchBar onSearch={handleSearch} />
                  <SearchResults
                    results={results}
                    onAddToWatchlist={addToWatchlist}
                    hasSearched={hasSearched}
                  />
                </>
              }
            />
            <Route
              path="/watchlist"
              element={<WatchlistPage 
                watchlist={watchlist} 
                removeFromWatchlist={removeFromWatchlist}
                showNotification={showNotification}
              />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
