# BingeTracker

## Project Description

MyBingeTracker is a web application that helps users track movies and TV shows they have watched or plan to watch. Users can search for titles, view details and manage a personal watchlist. The app integrates with The Movie Database (TMDb) API to fetch up-to-date information.

## Problem Statement

Keeping track of movies and TV shows you’ve watched or want to watch can be challenging, especially with the vast array of content available across multiple streaming platforms. Without an organized system, it's easy to forget what you've seen or miss out on new releases that interest you.

## Solution

**BingeTracker** addresses this issue by providing a user-friendly interface where individuals can:

- **Search** for movies and TV shows using the TMDb API.
- **View Details** such as synopsis and poster images.
- **Manage a Watchlist** by adding or removing titles they intend to watch.
- **Persist Data** using `localStorage` to ensure the watchlist is saved across sessions.

This streamlined approach ensures users have an organized and accessible record of their viewing preferences and history.

## Features

- **Search Functionality**: Easily search for movies and TV shows by title.
- **Detailed Information**: Access comprehensive details for each title, including synopsis, release dates, and poster images.
- **Watchlist Management**: Add your favorite titles to a personalized watchlist for future reference.
- **Responsive Design**: Optimized for various screen sizes providing a seamless experience on both desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js
- **API**: The Movie Database (TMDb) API
- **Styling**: CSS3
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Version Control**: Git & GitHub
  
## Setup Instructions

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js and npm**: Ensure you have Node.js and npm installed. You can download them from [Node.js Official Website](https://nodejs.org/en/download/).

- **TMDb API Key**: Obtain an API key from [The Movie Database (TMDb)](https://developers.themoviedb.org/3/getting-started/introduction).

### Installation

### Step 1: Clone the Repository

git clone https://github.com/yourusername/movie-tv-tracker.git

### Step 2: Navigate to the Project Directory
After cloning the repository, navigate to the directory containing the project.
cd path/to/movie-tv-tracker

### Step 3: Install Required Dependencies
```npm install```

# Running the Application

Start the development server:

```bash
   npm start
   ```
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make edits. You will also see any lint errors in the console.


# API Integration

**MyBingeTracker** utilizes The Movie Database (TMDb) API to fetch and display information about movies and TV shows. The integration allows users to search for titles and view detailed information seamlessly.

### How It Works

- **Search Requests**: When a user enters a search query, the app sends a `GET` request to the TMDb API’s `/search/multi` endpoint, which returns a list of movies and TV shows matching the query.
  
- **Fetching Details**: For each result, the app retrieves necessary details such as title, overview, release date, and poster image.
  
- **Displaying Data**: The fetched data is then displayed to the user in a structured and user-friendly format.

---

### AI Assistance

During the development of **MyBingeTracker**, I utilized **ChatGPT**, a Large Language Model developed by OpenAI, to accelerate and enhance various aspects of the project. The AI contributions included assistance with JavaScript code, CSS styling, and general frontend development. Below are the specific ways ChatGPT was used:

#### JavaScript Code Generation

- ChatGPT was used in writing core JavaScript files, including `tmdbApi.js` for managing API interactions, and components like `SearchBar.js`, `SearchResults.js`, and `Watchlist.js`. It provided sample code for handling search functionalities, managing watchlists, and efficiently integrating the TMDb API.
- The AI also helped in structuring the app's logic offering suggestions for component-based architecture which made the code more modular and easier to maintain.

#### Debugging

- Throughout the development process, ChatGPT assisted in troubleshooting issues especially those related to React’s state management (e.g., `useState`, `useEffect`) and asynchronous API calls.
- It offered insights and recommendations for handling common errors improving error handling within components, and refactoring code for better readability and performance.

#### Optimization

- ChatGPT reviewed and suggested improvements to make the app more responsive and efficient. This included optimizing search result rendering, minimizing unnecessary re-renders, and improving overall performance during API interactions.
- It recommended best practices for React development which helped in cleaning up code across multiple components, such as `MovieCard.js` and `WatchlistPage.js`.

#### Frontend Development (CSS and UI Design)

- The AI provided sample CSS code for styling components ensuring a consistent and modern look throughout the app. It helped draft styles for key elements such as search bars, buttons, and cards, used across files like `App.css`.
- ChatGPT also contributed to responsive design principles offering CSS layouts that ensured the application looked and functioned well on various screen sizes, from desktop to mobile.
- Suggestions from the AI led to better visual consistency and improved user experience, with easy-to-follow layouts and intuitive navigation.

All AI-generated code snippets, designs, and recommendations were carefully reviewed, customized, and integrated into the final product. This collaboration with ChatGPT significantly accelerated the development process, ensuring that **MyBingeTracker** maintained high code quality and delivered a smooth, user-friendly experience.


All AI-generated code and suggestions were reviewed and integrated thoughtfully to ensure a comprehensive understanding and mastery of the implementation.

---

# Screenshots

**Search for movies and TV shows**

![Searching movies and TV shows](https://github.com/abd-abdur/MyBingeTracker/blob/main/movie-tv-tracker/images/movie_search.png)

**Manage your personalized watchlist**

![Personalized Watchlist](https://github.com/abd-abdur/MyBingeTracker/blob/main/movie-tv-tracker/images/watchlist.png)
