import React from "react";
import { BiUserCircle } from "react-icons/bi";

function Header() {
  return (
    <div className="d-flex align-items-center justify-content-between my-3">
      <h3 className="logo">
        <span className="fw-bold">Shop</span>cart
      </h3>
      <div className="d-flex align-items-center gap-1">
        <span>
          <BiUserCircle />
        </span>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Header;
