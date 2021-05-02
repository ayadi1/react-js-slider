import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import Slideshow from "./Slide";
function App() {
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <Slideshow FaQuoteRight={FaQuoteRight} data={data} />
    </section>
  );
}

export default App;
