import React from "react";
import Card from "./Card";
import "./styles.css";

const Products = ({ items }) => {
  return (
    <div className="products">
      {items.map(({ title, slug }) => (
        <Card key={slug} title={title} slug={slug} />
      ))}
    </div>
  );
};

export default Products;
