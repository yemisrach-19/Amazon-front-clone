import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../../Components/Currency/CurrencyFormat";
import classes from './Product.module.css'

const ProductCard = ({ Product }) => {
  const { image, title, id, rating, price } = Product;
  return (
    <div  className={classes.card_container}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
      </div>
      <div className={classes.rating}>
        {/* rating */}
        <Rating value={rating.rate } precision={0.1} /> 
        {/* counting */}
        <small>{rating.count}</small>
      </div>
      <div>
        {/* realprice */}
        <CurrencyFormat amount={price} /> 
      </div>
      <button className={classes.button}>add to card</button>
    </div>
  );
};

export default ProductCard;