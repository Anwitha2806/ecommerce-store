import React from 'react'

import Announcement from '../Components/Announcement';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';

function Home() {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}

export default Home;