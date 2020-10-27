import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Foodbox/Foodbox';
import './App.css';

function App() {
  return (
    <div className="App">

     <FoodBox 
       src = "https://i.imgur.com/eTmWoAN.png"
        foodName ="Pizza"
        calories ="400 Cal"
      />
      

    </div>
  );
}

export default App;
