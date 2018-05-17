import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
            title="pasta"
            ingredients={['flour', 'water']}
            instructions="Mix ingridients"
            img="pasta.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
