import { useState } from 'react';
import reactLogo from './assets/react.svg';
import brandLinkedin from './assets/brand-linkedin.svg';
import brandInstagram from './assets/brand-instagram.svg';
import './App.css';

const Header = () => {
  return (
    <div className="lg:py-100 sticky top-0 z-50 px-16 py-16 lg:px-40">
      <div className="flex-wrap justify-between sm:space-y-10 lg:flex lg:items-end">
        <div className="text-4xl font-bold">sannethrane.com</div>
        <div className="flex space-x-16 lg:justify-evenly">
          <div>work</div>
          <div>about</div>
          <img src={brandLinkedin} />
          <img src={brandInstagram} />
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="mb-100 mx-40 h-full">
      <div className="flex flex-row ">
        <div className="flex w-1/4 flex-initial">
          <div className="h-20">
            Designer with passion for the ocean, susstainability &
            responsebility
          </div>
        </div>
        <div className="flex-auto"> image</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App ">
      <div className="flex h-screen flex-col">
        <Header />
        <Landing />
      </div>
    </div>
  );
}

export default App;
