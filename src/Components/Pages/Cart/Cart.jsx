import React from "react";
import ProductCard from "../../Product/ProductCard";
import classes from "./Cart.module.css";
import LayOut from "../../LayOut/LayOut";
import CurrencyFormat from "../../Currency/CurrencyFormat";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket, user }, dispatch] = useContext();
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>

          <h3>Your shopping basket </h3>

          <hr />
          {basket?.length == 0 ? (
            <p>Opps! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            {" "}
            <div>
              <p>Subtotal({basket?.length} item)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbx" />
              <small>This order cotains a gift</small>
            </span>
            <Link to="/Payments">continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}
export default Cart;
