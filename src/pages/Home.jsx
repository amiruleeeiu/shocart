import React from "react";
import AllProducts from "../components/AllProducts";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Products from "../components/Products";
import Search from "../components/Search";

const Home = () => {
  return (
    <PageTitle title="Shopcart">
      <div className="container">
        <Header />
        <hr />
        <Search />
        <div>
          <div className="row">
            <div className="col-lg-4">
              <h1 className="feature-title">
                We picked some{" "}
                <span className="feature-title-color">cool things</span> for
                you!
              </h1>
            </div>
            <div className="col-lg-8">
              <Products product_type="hot deals for you" />
            </div>
          </div>
        </div>
        <div className="my-5">
          <Products product_type="Today’s hot deals" />
        </div>
        <div className="my-5">
          <Products product_type="Your searched items" />
        </div>
        <div className="my-5">
          <Products product_type="Deals on furniture" />
        </div>
        <div className="my-5">
          <AllProducts />
        </div>
      </div>
    </PageTitle>
  );
};

export default Home;
