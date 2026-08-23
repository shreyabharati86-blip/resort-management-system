function Services() {
  const services = [
    {
      icon: "🏊",
      title: "Swimming Pool",
      text: "Relax and enjoy our beautiful resort swimming pool."
    },
    {
      icon: "🍽️",
      title: "Restaurant",
      text: "Enjoy delicious meals prepared by our expert chefs."
    },
    {
      icon: "💆",
      title: "Spa & Wellness",
      text: "Refresh your mind and body with our relaxing spa services."
    },
    {
      icon: "🏋️",
      title: "Fitness Center",
      text: "Stay active with our modern fitness facilities."
    },
    {
      icon: "🚗",
      title: "Free Parking",
      text: "Safe and convenient parking facilities for our guests."
    },
    {
      icon: "📶",
      title: "Free Wi-Fi",
      text: "Stay connected with complimentary high-speed Wi-Fi."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p>OUR SERVICES</p>
        <h2>Everything You Need</h2>
        <span>
          Enjoy premium facilities and services throughout your stay.
        </span>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;