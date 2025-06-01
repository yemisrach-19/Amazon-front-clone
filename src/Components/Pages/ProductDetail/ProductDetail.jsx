import React from "react";
import React, { useEffect, useState } from "react";
// import classes from "./ProductDetail.module.css";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/ endPoints";

import ProductCard from "../../Product/ProductCard";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${producturl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  console.log(product);
  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product} />}
    </LayOut>
  );
}
export default ProductDetail;
