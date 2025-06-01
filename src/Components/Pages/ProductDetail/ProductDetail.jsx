import React from "react";
import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/ endPoints";

import ProductCard from "../../Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    axios
      .get(`${producturl}/products/${productid}`)
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
}
return (
  <LayOut>
    <ProductCard Product={product} />
  </LayOut>
);

export default ProductDetail;
