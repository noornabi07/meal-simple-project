import React from 'react';
import './Food.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Food = (props) => {
    const meal = props.meal;
    const handleAddToCart = props.handleAddToCart;


    // console.log(props.meal)
    const {strMeal,idMeal, strArea, strMealThumb } = props.meal;
    return (
        <div className='food'>
            <div className='foodImg'>
            <img src={strMealThumb} alt="" />
            </div>
            <div className='food-info'>
                <h3 style={{color: 'red'}}>Name: {strMeal}</h3>
                <h4 style={{color: 'purple'}}>Price: ${idMeal}</h4>
                <h3 style={{color: 'red'}}>Area: {strArea}</h3>
            </div>
            <button onClick={()=> handleAddToCart(meal)} className='addBtn'>
                Add To Cart
                <FontAwesomeIcon style={{marginLeft: '5px'}} icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Food;