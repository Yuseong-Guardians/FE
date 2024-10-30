import React from 'react';
import { IndexPage } from 'page/indexPage';
import { Route, Routes } from 'react-router-dom';
import { WarPage } from 'page/warPage';
import { StopperPage } from 'page/stopperPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/newComer" element={<WarPage />} />
      <Route path="/stopper" element={<StopperPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;