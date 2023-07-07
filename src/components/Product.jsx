import React from "react";

function Product({ product }) {
  return (
    <div className="product p-3">
      <div className="d-flex align-items-center justify-content-center">
        <img
          src={product?.product_img}
          alt=""
          className="w-50 mb-3"
        />
      </div>
      <p>{product?.product_name}</p>
      <div className="d-flex align-items-center justify-content-between">
        <p>$ {product?.product_price}</p>
        <p className="text-danger">-40% off</p>
      </div>
    </div>
  );
}

export default Product;
