import React from 'react';
import './App.css';
import Banner from './components/banner/Banners';
import Cards from './components/card/Cards';
import NavBar from './components/navbar/NavBar';
import Slider from './components/slider/Slider';
import Tabs from './components/tab/Tabs';
import Form from './components/form/Form';



function App() {
  return (
    <div>
      <NavBar />
      <Slider />
      <Cards />
      <Banner />
      <Tabs />
      <Form />
    </div>
  );
}

export default App;
