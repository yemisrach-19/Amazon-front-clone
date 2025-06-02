import React, { useEffect, useState } from "react";

import LayOut from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../API/endPoint.js";
import Loader from "../../Loader/Loader";

import ProductCard from "../../Product/ProductCard";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productid } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${producturl}/products/${productid}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productid]);

  console.log(product);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard product={product} flex={true} renderDesc={true} />
      )}
    </LayOut>
  );
}
export default ProductDetail;
