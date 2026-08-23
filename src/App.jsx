import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import About from "./components/About";
import Room from "./components/Room";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Registration from "./pages/Registration";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import StaffDashboard from "./pages/StaffDashboard";

import "./App.css";

function App() {

  const path = window.location.pathname;

  if (path === "/register") {
    return <Registration />;
  }

  if (path === "/login") {
    return <Login />;
  }

  if (path === "/user-dashboard") {
    return <UserDashboard />;
  }

  if (path === "/admin-dashboard") {
    return <AdminDashboard />;
  }

  if (path === "/manager-dashboard") {
    return <ManagerDashboard />;
  }

  if (path === "/staff-dashboard") {
    return <StaffDashboard />;
  }

  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />
        <Booking />
        <About />
        <Room />
        <Services />
        <WhyChoose />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;