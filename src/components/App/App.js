import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";

import Home from "../Home/Home";
import DashBoard from "../DashBoard/DashBoard";
import Work from "../Work/Work";
// import About from "../About/About";
import Contact from "../Contact/Contact";
import About2 from "../About/About2";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<DashBoard />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About2/>}/>
            <Route path="/contact" element={<Contact/>}/>



          </Route>
          


          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
