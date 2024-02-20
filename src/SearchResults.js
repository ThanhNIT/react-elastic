// SearchResults.js
import React from 'react';
import './SearchResults.css'; // Import CSS file for styling

const SearchResults = ({ results, handleSelect }) => {
  return (
    <div className="search-results-container"> {/* Add a container div with a class */}
      {results.length>0 ? results.map((result, index) => (
        <div onClick={e=> handleSelect(result.docUrl)} key={index} className="search-result-item"> {/* Add a class for each result */}
          <h2>{result.docUrl}</h2>
        </div>
      )) : "No result"}
    </div>
  );
};

export default SearchResults;
