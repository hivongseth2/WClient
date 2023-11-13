import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import IntroItem from "../components/IntroItem";
import ListItem from "../components/ListItem";
import Shopping from "./Shopping";
// import Categories from "../components/Categories";
import Categories from "../components/Categories";

import HomeShopping from "../components/HomeShopping";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div className="slider container-fluid">
      <Slider />

      {/* ================= */}
      <Categories />
      <h1 className="text-center mt-5">Sản phẩm nổi bật</h1>
      <ListItem />
      {/* ===============LOAI SAN PHAM */}

      {/* =============== */}

      <h1 className="text-center mt-5">Dành cho bạn</h1>
      <HomeShopping />
    </div>
  );
};
export default Home;
