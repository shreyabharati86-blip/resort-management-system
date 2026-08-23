function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-about">
          <h2>🌴 Royal Haven</h2>

          <p>
            A peaceful luxury resort where comfort,
            nature and unforgettable experiences come together.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#services">Services</a>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <p>📍 Goa, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@royalhaven.com</p>
        </div>

        <div className="footer-links">
          <h3>Follow Us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Royal Haven Resort. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;