import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './app/layout';

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
