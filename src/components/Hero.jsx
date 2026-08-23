function Hero() {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-center text-white"
    >
      <div className="container">

        <p className="hero-small-text">
          WELCOME TO ROYAL HAVEN
        </p>

        <h1 className="display-2 fw-bold">
          Escape to Paradise
        </h1>

        <p className="lead mb-4">
          Luxury, Comfort & Unforgettable Stay
        </p>

        <div>
          <a
            href="#rooms"
            className="btn btn-light btn-lg rounded-pill px-4 me-2"
          >
            Explore Rooms
          </a>

          <a
            href="#booking"
            className="btn btn-outline-light btn-lg rounded-pill px-4"
          >
            Book Your Stay
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero