import React from "react";
import { useGetProductsQuery } from "../features/productApi";
import Product from "./Product";

function Products({ product_type }) {
  const { data, isLoading, isSuccess } = useGetProductsQuery(
    `?product_type=${product_type}`
  );

  let content = null;

  if (isLoading && !isSuccess) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isSuccess && data?.products[0]?.productData?.length === 0) {
    content = <p>There is no data</p>;
  }
  if (!isLoading && isSuccess && data?.products[0]?.productData?.length > 0) {
    content = (
      <div className="d-flex flex-wrap">
        {data?.products[0]?.productData.map((product) => {
          return <Product key={product?._id} product={product} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-3 product-title">
        {product_type ? product_type : "All Products"}
      </h3>
      <hr />
      {content}
    </div>
  );
}

export default Products;
