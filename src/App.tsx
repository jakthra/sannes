import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const Header = () => {
  return (
    <div className="lg:py-100 sticky top-0 z-50 px-16 py-16 lg:px-40">
      <div className="flex-wrap items-center justify-between sm:space-y-10 lg:flex">
        <div className="text-5xl font-bold">Sannes</div>
        <div className="flex  space-x-16 lg:justify-evenly">
          <div>About</div>
          <div>Concepts</div>
          <div>Blog</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App ">
      <Header />
      <div className="relative h-screen bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
  );
}

export default App;
