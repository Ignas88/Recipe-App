import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component{
    static defaultProps = {
        recipes: [
            {
                title: "Pasta with Pesto sauce",
                instructions: "Cook the pasta. While the pasta is cooking, put the pesto sauce in a small bowl, then add salt (as per the quantity specified in the Pesto Sauce recipe) and the specified amount of pasta cooking water, which will warm up the sauce and will dilute it a bit.Put the drained linguine back into the pasta cooking pot, add the sauce and extra virgin oil, then mix well. Serve in the warmed dishes.",
                ingredients: ["Pasta", "1/3 cup Pesto Sauce", "3 cups water", "extra virgin olive oil"],
                img:"img/pasta.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk.  Blend until creamy",
                ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
                img: "img/Milkshake.jpg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
                ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
                img: "img/Toast.jpg"
            }
        ]
    };

    static propTypes = {
      recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    };
    render() {
        const recipes = this.props.recipes.map((r, index) => (
           <Recipe key={index} {...r} />
        ));

        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )

    }
}

export default RecipeList;