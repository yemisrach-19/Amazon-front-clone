import React from "react";
import { categoryInfos } from "./categoryCollection.JS";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

 
function Category() {
  return (
    <div className={classes.category_container} >
      {categoryInfos.map((infos) => (<CategoryCard data={infos} />
      ))}
    </div>
  );
}

export default Category;
