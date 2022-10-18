import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './app/layout';
import 'antd/dist/antd.css';
import './theme/theme.scss';

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
