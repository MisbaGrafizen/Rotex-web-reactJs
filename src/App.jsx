import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";





import Cookies from 'js-cookie';


import ScrollToTop from "./component/ScrollToTop";
import Home from "./pages/home/Home";
import AllProduct from "./pages/product/AllProduct";
import Productdetails from "./pages/product/Productdetails";
import CheckoutPage from "./pages/product/CheckoutPage";
import MyAccount from "./pages/profile/MyAccount";
import ContactPage from "./pages/contactUs/ContactUs";
import BlogMainPage from "./pages/blogs/BlogMainPage";
import AboutUs from "./pages/aboutUs/AboutUs";



// import { io } from "socket.io-client";

// const socket = io("http://localhost:8000", {
//   transports: ["polling"], 
//    withCredentials: true, 
// });

function App() {
  const user = Cookies.get("user");

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to Socket.IO server");
  //   });
  // }, []);

  return (
    <>

      <div className="w-100 ease-soft-spring h-[100%]  !bg-[#fbffff]  duration-1000 ">

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProduct />} />
          <Route path="/product-details/:title" element={<Productdetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogMainPage />} />
          <Route path="/about-us" element={<AboutUs />} />


























        </Routes>

      </div>
    </>
  );
}

export default App;
