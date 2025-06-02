import React,{useContext} from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../../Components/Currency/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
const ProductCard = ({ Product, flex, renderDesc }) => {
  const { image, title, id, rating, price, description } = Product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,

      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/product/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>

        {renderDesc && <div style={{ maxWidth: "500" }}>{description}</div>}

        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} /> {/*count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
