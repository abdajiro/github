// src/App.js
import React from 'react';
import Card from './Card';
import brandsData from './BrandsData';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <h1>Fashion Brands</h1>
      <div className="card-container">
        {brandsData.map((brand, index) => (
          <Card key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default App;
