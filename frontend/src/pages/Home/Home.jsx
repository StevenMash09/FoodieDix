import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Expmenu from "../../components/Exploremenu/Expmenu";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Expmenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
    </div>
  );
};

export default Home;
