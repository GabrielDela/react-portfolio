import './App.css';

// import Container from './components/Container';
// import NavBar from './components/NavBar';

// import Home from './pages/Home';

// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import HeroLoader from './components/HeroLoader';
import HeroTitle from './components/HeroTitle';
import Header from './components/Header';

function App() {

  return (
    <div id="#top" className="bg-neutral-200">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
      <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200&display=swap" rel="stylesheet"></link>

      <Header />

      <section className='flex' style={{ minHeight: "90vh", marginTop: "10vh" }}>
        <div className='flex flex-col justify-between mx-2 lg:mx-20 bg-neutral-200 w-full'>

          <HeroTitle />

          <div className='flex flex-col'>
            <img alt="Mountains" src="/mountain.png" className='w-full object-cover h-60 bg-neutral-600 border-solid border-2 border-neutral-900'>
            </img>
          </div>

          <div className='flex flex-wrap  lg:flex-nowrap justify-between pb-6 lg:pb-20'>
            <div className="hidden lg:flex w-full pt-6 lg:pt-0 lg:w-fit justify-between">
              <svg className="my-auto mx-2 h-24 w-24" width="64" height="90" viewBox="0 0 64 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6.00476" y="50.9528" width="42.4608" height="8.49216" transform="rotate(45 6.00476 50.9528)" fill="black" />
                <rect x="6.00476" y="50.9528" width="42.4608" height="8.49216" transform="rotate(45 6.00476 50.9528)" fill="black" />
                <rect x="25.6294" y="82.5852" width="44.7315" height="8.49216" transform="rotate(-45 25.6294 82.5852)" fill="black" />
                <rect x="25.6294" y="82.5852" width="44.7315" height="8.49216" transform="rotate(-45 25.6294 82.5852)" fill="black" />
                <rect x="27.2373" y="82.0908" width="82.0909" height="8.49216" transform="rotate(-90 27.2373 82.0908)" fill="black" />
                <rect x="27.2373" y="82.0908" width="82.0909" height="8.49216" transform="rotate(-90 27.2373 82.0908)" fill="black" />
              </svg>
              <HeroLoader />
            </div>
            <div className='flex flex-col text-6xl lg:text-7xl w-full lg:w-fit'>
              <h1 className='font-bold ml-auto'>GABRIEL</h1>
              <div className='font-bold ml-auto'>DELAHAYE</div>
            </div>
          </div>

          <div className="flex lg:hidden w-full justify-between pb-12">
            <svg className="my-auto mx-2 h-16 w-16" width="64" height="90" viewBox="0 0 64 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6.00476" y="50.9528" width="42.4608" height="8.49216" transform="rotate(45 6.00476 50.9528)" fill="black" />
              <rect x="6.00476" y="50.9528" width="42.4608" height="8.49216" transform="rotate(45 6.00476 50.9528)" fill="black" />
              <rect x="25.6294" y="82.5852" width="44.7315" height="8.49216" transform="rotate(-45 25.6294 82.5852)" fill="black" />
              <rect x="25.6294" y="82.5852" width="44.7315" height="8.49216" transform="rotate(-45 25.6294 82.5852)" fill="black" />
              <rect x="27.2373" y="82.0908" width="82.0909" height="8.49216" transform="rotate(-90 27.2373 82.0908)" fill="black" />
              <rect x="27.2373" y="82.0908" width="82.0909" height="8.49216" transform="rotate(-90 27.2373 82.0908)" fill="black" />
            </svg>
            <HeroLoader />
          </div>
        </div>
      </section>

      <div className='flex bg-neutral-800'>
        <p className='py-4 text-2xl font-thin tracking-widest text-white mx-auto'>EXPÉRIENCES</p>
      </div>

      <section className='flex flex-col justify-between lg:px-20 bg-neutral-200 w-full bg-neutral-800 py-4'>
        <div className='block mx-auto lg:flex lg:mx-0'>
          <div className='w-40 h-40 border-solid border-2 border-gray-500 bg-gray-200'>

          </div>
          <div className=''>

          </div>
        </div>
      </section>

      <footer className='flex bg-neutral-800'>
        <p className='py-4 text-2xl font-thin tracking-widest text-white mx-auto'>FOOTER</p>
      </footer>
    </div>
  );
}

export default App;
