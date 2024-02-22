// SearchResults.js
import React from 'react';
import './SearchResults.css'; // Import CSS file for styling

const SearchResults = ({ results, handleSelect }) => {
  console.log("子组件的result",results)
  return (
    // <div className="search-results-container"> {/* Add a container div with a class */}
    //   {results.length>0 ? results.map((result, index) => (
    //     <div onClick={e=> handleSelect(result.docId)} key={index} className="search-result-item"> {/* Add a class for each result */}
    //       <h2>{result.docId}</h2>
    //     </div>
    //   )) : "No result"}
    // </div>
    <div>

      {results.length > 0 ? <table border="none">
        <thead>
          <tr>
            <th></th>
            <th>file name</th>
            <th>category</th>
            <th>publication date</th>
            <th>uploaded date</th>
          </tr>
        </thead>
        <tbody>
          {
            results.map((item,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> <a href={`http://45.118.132.207/${item._source.docId}`} target='_blank'> {item._source.docId}</a></td>
                <td>PDF</td>
                <td></td>
                <td>02/21/2024</td>
              </tr>
            ))
          }
          
        </tbody>
      </table> : 
      <div className='nolist'>File list is empty</div>
      }
    </div>
  );
};

export default SearchResults;
