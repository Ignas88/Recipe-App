import React, { Component } from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import './RecipeApp.css';

class RecipeApp extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Recipe
                    title="pasta"
                    ingredients={['flour', 'water']}
                    instructions="Mix ingridients"
                    img="img/pasta.jpg"
                />
            </div>
        );
    }
}

export default RecipeApp;
