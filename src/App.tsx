import React from 'react';
import './App.scss';
import Header from './app/components/layout/header/Header';
import Footer from './app/components/layout/footer/Footer';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-Main">
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
