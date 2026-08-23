function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🌴 Royal Haven
      </div>

      <div className="nav-links">

        <a href="#home">Home</a>

        <a href="#room">Rooms</a>

        <a href="#services">Services</a>

        <a href="#about">About</a>

        <a href="#contact">Contact</a>

        {/* Login - Admin, Manager, Staff */}
        <a href="/login">Login</a>

        {/* Register - Only User */}
        <a href="/register">Register</a>

        <button>Book Now</button>

      </div>

    </nav>
  );
}

export default Navbar;