import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../../Components/Currency/CurrencyFormat";
import classes from './Product.module.css'
import { Link } from "react-router-dom";

const ProductCard = ({ Product }) => {
  const { image, title, id, rating, price } = Product;
  return (
  
<div className={`${classes.card__container}`}>
<Link to={`/product/${id}`}>
<img src={image}alt="" className={classes.img_container}/> </Link>
<div>
<h3>{title}</h3>
<div className={classes. rating}>
{/* rating */}
<Rating value={rating.rate} precision={0.1}/> {/*count */}
<small>{rating.count}</small>
</div>
<div>
{/* price */}
<CurrencyFormat amount={price}/>
</div>
<button className={classes.button}>
add to cart
</button>
</div>
</div>
  );
};

export default ProductCard;