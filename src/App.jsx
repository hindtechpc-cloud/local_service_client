import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import RoutePath from "./RoutePath";
import Locationbar from "./components/layout/Locationbar";
import Searchbar from "./components/Searchbar";
import ServiceCards from "./pages/ServiceCards";
import ServicesSection from "./pages/ServicesSection";
export default function App() {
 
  return (
    <div>
      <Router>
        <Locationbar />
        <Navbar />
     
        <ServiceCards/>
        <ServicesSection/>
        <RoutePath />
      </Router>
    </div>
  );
}
