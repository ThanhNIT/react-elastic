// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import FileViewer from './FileViewer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DocxViewer from './DocxViewer';

const App = () => {
  const [results, setResults] = useState([]);
  const [fileUrl, setFileUrl] = useState('');

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://45.118.132.207:3001/search?query=${query}`);
      const extractedResults = response.data.map((item) => item._source);
      setResults(extractedResults);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleFileSelect = (url) => {
    window.open('https://www.clickdimensions.com/links/TestPDFfile.pdf', '_blank');
  };

  return (
    <Router>
      <div>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div>
      <SearchResults results={results} handleSelect={handleFileSelect}/>
      </div>
      {/* {fileUrl && <DocxViewer fileUrl={fileUrl} />} */}
      {/* <div>
      <Route path='/view' component={FileViewer}></Route>
      <Route path='/doc' component={DocxViewer}></Route>
      </div> */}
      </div>
    </Router>
  );
};

export default App;
