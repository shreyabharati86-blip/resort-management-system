function Rooms() {
  const rooms = [
    {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      name: "Deluxe Room",
      price: "₹4,999 / Night",
      text: "Elegant room with modern comfort and beautiful resort views."
    },
    {
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
      name: "Premium Suite",
      price: "₹7,999 / Night",
      text: "Spacious suite designed for a luxurious and relaxing stay."
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      name: "Royal Villa",
      price: "₹11,999 / Night",
      text: "Private villa with premium facilities and peaceful surroundings."
    }
  ];

  return (
    <section className="rooms-section" id="rooms">
      <div className="section-heading">
        <p>OUR ACCOMMODATION</p>
        <h2>Stay In Comfort & Luxury</h2>
        <span>
          Choose from our beautiful rooms and suites designed for a perfect stay.
        </span>
      </div>

      <div className="rooms-container">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={room.image} alt={room.name} />

            <div className="room-info">
              <h3>{room.name}</h3>
              <p>{room.text}</p>

              <div className="room-bottom">
                <strong>{room.price}</strong>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;