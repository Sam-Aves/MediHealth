// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbox from "../components/Chatbox";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-base-100">
        <Outlet />
      </main>
      <Footer />
      <Chatbox /> {/* <-- Global chatbox for all pages */}
    </>
  );
};

export default MainLayout;
