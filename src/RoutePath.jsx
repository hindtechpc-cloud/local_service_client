import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindProfessionals from "./pages/FindProfessionals";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import BookServiceman from "./pages/BookServiceman";
import MyBookings from "./pages/MyBookings";
import LandingPage from "./pages/regisetr/LandingPage";
import Login from "./pages/Login";
export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services/:serviceName" element={<FindProfessionals />} />

      <Route path="/profile/:id" element={<ProfessionalProfile />} />
      <Route path="/book-serviceman" element={<BookServiceman />} />
      <Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
  );
}
