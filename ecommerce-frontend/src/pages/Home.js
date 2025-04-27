import React, {useEffect, useState} from "react";
import Featured from "../components/Featured";
import Category from "../components/Category";
import Product from "./Product";

const Home = (props) => {

  return (
    <div>
    <Featured />
    <Category />
    <Product />
    </div>
  );
};

export default Home;
