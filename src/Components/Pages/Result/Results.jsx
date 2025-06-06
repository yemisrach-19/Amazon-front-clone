import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import Layout from "../../LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../../API/endPoint";
import ProductCard from "../../Product/ProductCard";
function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${producturl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p> <hr />
        
<hr />
{isLoading? (
<Loader />
): (

        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>)}
      </section>
    </Layout>
  );
}
export default Results;
