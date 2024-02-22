// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import FileViewer from './FileViewer';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DocxViewer from './DocxViewer';
import "./container.css"

const App = () => {
  const [results, setResults] = useState([]);
  const [fileUrl, setFileUrl] = useState('');
  const [showLoading,setShowloading] = useState(false);
  const handleSearch = async (query) => {
    try {
      setShowloading(true);
      // const response = await axios.get(`http://45.118.132.207:3001/search?query=${query}`);
      const response = await axios.get(`http://demoapi.qpsoftware.cn/search?query=${query}`);
      setShowloading(false)
      console.log(response);
      // const extractedResults = response.data.map((item) => item._source);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleFileSelect = (url) => {
    window.open('http://45.118.132.207/' + url, '_blank');
  };

  return (
    <Router>
      <div className='container'>
        <div className='container-header'>
          <h2>Demo for DKU CEPD built on reactJS, NodeJS and Elasticsearch with 1000 documents</h2>
          <h2>DKU CEPD演示系统：一个采用ReactJS、NodeJS与Elasticsearch技术栈构建的展示平台，其中整合了1000份文档资源。</h2>
        </div>
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>
          {
            showLoading ?
            <div className='svg'>
              <svg t="1708570407534" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4281" width="500" height="500"><path d="M1016.057791 124.92321l-22.64677 221.938351a28.081995 28.081995 0 0 1-30.799608 25.364383l-221.938351-22.646771a28.081995 28.081995 0 0 1-14.946869-49.822895l76.546085-62.505086a394.053807 394.053807 0 1 0-45.293541 588.816034 58.881603 58.881603 0 1 1 70.657924 94.210565 511.817014 511.817014 0 1 1 65.675634-757.760942l76.99902-62.505087a28.081995 28.081995 0 0 1 45.746476 24.911448z" fill="#1677FF" p-id="4282"></path></svg>
            </div>:<SearchResults results={results} handleSelect={handleFileSelect} />
          }
          
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
