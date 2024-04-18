import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/home/Home";
import Civilizations from "../pages/civilizations/Civilizations";
import CivilizationsDetail from "../pages/civilizationsdetail/CivilizationsDetail";
import Contact from "../pages/contact/Contact";
import NotFound from "../components/Error/NotFound";
import Footer from "../components/Footer/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/civilizations"
          element={
            <>
              <Civilizations />
              <Footer />
            </>
          }
        />
        <Route
          path="/civilizations/:name"
          element={
            <>
              <CivilizationsDetail />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <>
              <NotFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
