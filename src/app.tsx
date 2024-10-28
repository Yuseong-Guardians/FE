import React from 'react';
import { IndexPage } from 'page/indexPage';
import { Route, Routes } from 'react-router-dom';
import { WarPage } from 'page/warPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/war" element={<WarPage />} />
    </Routes>
  );
}

export default App;