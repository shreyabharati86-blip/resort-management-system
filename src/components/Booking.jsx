function Booking() {
  return (
    <section className="booking-section">
      <div className="booking-box">

        <div className="booking-item">
          <label>Check In</label>
          <input type="date" />
        </div>

        <div className="booking-item">
          <label>Check Out</label>
          <input type="date" />
        </div>

        <div className="booking-item">
          <label>Guests</label>
          <select>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>

        <button className="availability-btn">
          Check Availability
        </button>

      </div>
    </section>
  );
}

export default Booking;