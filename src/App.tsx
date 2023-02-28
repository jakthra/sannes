import { useState } from 'react';
import reactLogo from './assets/react.svg';
import brandLinkedin from './assets/brand-linkedin.svg';
import brandInstagram from './assets/brand-instagram.svg';
import landing from './assets/pics/landing.jpg';
import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const Header = () => {
  const textLinkClass =
    'delay-350 transition ease-in-out hover:bg-black hover:text-white cursor-pointer';
  return (
    <div className="lg:py-100 sticky top-0 z-50 px-16 py-16 lg:px-40">
      <div className="flex-wrap justify-between sm:space-y-10 lg:flex lg:items-end">
        <Link to="/sannes">
          <div className="text-4xl font-bold">sannethrane.com</div>
        </Link>
        <div className="flex space-x-16 lg:justify-evenly">
          <Link to="/sannes/work">
            <div className={textLinkClass}>work</div>
          </Link>
          <Link to="/sannes/about">
            <div className={textLinkClass}>about</div>
          </Link>
          <img className="cursor-pointer" src={brandLinkedin} />
          <img className="cursor-pointer" src={brandInstagram} />
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div className="ml-40 flex flex-row gap-12 pb-12">
      <div className="flex basis-1/5 items-end">
        <p>
          Designer with passion for the ocean, susstainability & responsebility
        </p>
      </div>
      <div className="grow">
        <img
          className="object-cover"
          src={landing}
          style={{ height: '70vh', width: '100%' }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="">
      <div className="flex flex-row">
        <div className="h-60 basis-1/2 border-r-2 border-b-2 border-black"></div>
        <div className="basis-1/2 border-b-2 border-black"></div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/2 border-r-2  border-black"></div>
        <div className="basis-1/2 border-black">
          <div>
            <div className="mx-16 mt-52 flex">
              <div className="flex flex-col">
                <div className="text-xl font-bold">About</div>
                <div>me</div>
                <div>
                  Highly experienced designer within the fashion industry.
                  Strong roots in casual and denim wear. Proven history with
                  concept building within the commercial fashion business.Great
                  interest in humans and holistic leadership, sustainability,
                  responsibility.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const cardClass =
    'flex lg:h-full h-60 items-center hover:shadow-xl mx-4 justify-center  cursor-pointer ';

  const navigate = useNavigate();

  return (
    <div className="mt-16 grid h-96 grid-cols-1 items-center gap-8 text-center lg:grid-cols-3 lg:gap-16">
      <div className={cardClass} onClick={() => navigate('/sannes/work/tech')}>
        <p>TECHNICAL APPAREL</p>
      </div>
      <div
        className={cardClass}
        onClick={() => navigate('/sannes/work/casual')}
      >
        <p>CASUAL CONCEPT</p>
      </div>
      <div className={cardClass} onClick={() => navigate('/sannes/work/jeans')}>
        <p>JEANS CONCEPT</p>
      </div>
    </div>
  );
};

const TechWorkItem = () => {
  return <div>Tech</div>;
};

const CasualWorkItem = () => {
  return <div>Casual</div>;
};

const JeansWorkItem = () => {
  return <div>Jeans</div>;
};

function App() {
  return (
    <div className="App ">
      <div className="flex h-screen flex-col">
        <Header />
        {/* <div className="mx-40"> */}
        <Routes>
          <Route path="/sannes" index element={<Landing />} />
          <Route path="/sannes/about" element={<About />} />
          <Route path="/sannes/work" element={<Work />} />
          <Route path="/sannes/work/tech" element={<TechWorkItem />} />
          <Route path="/sannes/work/casual" element={<CasualWorkItem />} />
          <Route path="/sannes/work/jeans" element={<JeansWorkItem />} />
        </Routes>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
