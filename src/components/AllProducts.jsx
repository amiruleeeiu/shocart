import React, { useState } from "react";
import { useGetProductsQuery } from "../features/productApi";
import Product from "./Product";
import ReactPagination from "./ReactPagination";

function AllProducts() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const { data, isLoading, isSuccess } = useGetProductsQuery(
    `?page=${page}&limit=${limit}`
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
      <h3 className="mb-3 product-title">All Products</h3>
      <hr />
      {content}
      <ReactPagination
        total={data?.products[0].total[0].count}
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
      />
    </div>
  );
}

export default AllProducts;
