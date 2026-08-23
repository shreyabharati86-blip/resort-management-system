function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
          alt="Royal Haven Resort"
        />
      </div>

      <div className="about-content">
        <p className="section-label">ABOUT ROYAL HAVEN</p>

        <h2>A Perfect Escape From Everyday Life</h2>

        <p>
          Royal Haven is a peaceful luxury resort where comfort,
          nature and unforgettable experiences come together.
          Enjoy beautiful rooms, relaxing spaces and warm hospitality.
        </p>

        <p>
          Whether you are planning a family vacation, a romantic
          getaway or a relaxing weekend, Royal Haven is the perfect
          destination for you.
        </p>

        <button className="about-btn">Discover More</button>
      </div>

    </section>
  );
}

export default About;