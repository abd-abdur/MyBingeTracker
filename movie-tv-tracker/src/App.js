import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import WatchlistPage from './components/WatchlistPage';
import { searchTMDb } from './api/tmdbApi';
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });
  const [hasSearched, setHasSearched] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const handleSearch = async (query) => {
    const data = await searchTMDb(query);
    setResults(data);
    setHasSearched(true);
  };

  const addToWatchlist = (item) => {
    if (!watchlist.some((watchItem) => watchItem.id === item.id)) {
      setWatchlist((prevList) => [...prevList, item]);
      showNotification("Movie successfully added to the watchlist!");
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prevList) => prevList.filter((item) => item.id !== id));
    showNotification("Movie removed from watchlist!"); // Notification for removal
  };

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
