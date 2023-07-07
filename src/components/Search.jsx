import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useGetProductsQuery } from "../features/productApi";
import Product from "./Product";

function Search() {
  const [searchText, setSearchText] = useState("");

  const { data, isLoading, isSuccess } = useGetProductsQuery(
    `/search?search=${searchText}`,
    {
      refetchOnMountOrArgChange: true,
      skip: searchText === "" ? true : false,
    }
  );

  let content = null;

  if (isLoading && !isSuccess) {
    content = <p>Loading...</p>;
  }
  if (!isLoading && isSuccess && data?.products[0]?.Result?.length === 0) {
    content = <p>There is no data</p>;
  }
  if (!isLoading && isSuccess && data?.products[0]?.Result?.length > 0) {
    content = (
      <div className="d-flex flex-wrap">
        <h3 className="mb-3 product-title">Search Products</h3>
        {data?.products[0]?.Result.map((product) => {
          console.log(product);
          return <Product key={product?._id} product={product} />;
        })}
        <hr />
      </div>
    );
  }

  // console.log(data?.products[0]?.Result[0]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between my-3">
        <div className="d-flex align-items-center gap-1">
          <HiLocationMarker />
          <p>Dhaka, 1212</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div>
        
        {content}
      </div>
      
    </div>
  );
}

export default Search;
