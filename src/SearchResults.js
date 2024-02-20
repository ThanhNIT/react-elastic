// SearchResults.js
import React from 'react';
import './SearchResults.css'; // Import CSS file for styling

const SearchResults = ({ results, handleSelect }) => {
  return (
    <div className="search-results-container"> {/* Add a container div with a class */}
      {results.map((result, index) => (
        <div onClick={e=> handleSelect(result.title)} key={index} className="search-result-item"> {/* Add a class for each result */}
          <h2>{result.title}</h2>
          <p>{result.content}</p>
          <p>Author: {result.author}</p>
          <p>Date: {result.date}</p>
          {/* Add any other fields from _source that you want to display */}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
