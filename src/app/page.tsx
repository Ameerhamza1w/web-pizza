import React from "react";
import Navbar from "../app/components/Navbar";
import Progressor from "./components/Progressor";
import Carousel from "./components/Carousel";
import ProductList from "./components/ProductList";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation"; // Corrected casing
import Burger from "./components/burger";
import Menuitem from "./components/Menuitem";

 

export default function App() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-600 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <br />
      <Burger />
      <Banner />
      <ProductList />
     <Menuitem />
      <Offer />
      <Card />
      <Reservation />
      
      <Footer />
    </div>
  );
}
