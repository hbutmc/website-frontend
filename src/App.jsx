import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/homepage/Home';
import Docs from './pages/docspage/Docs';
import Gallery from './components/Gallery';
import DocList from './pages/docspage/DocList';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocList />} />
          <Route path="/docs/:docName" element={<Docs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
