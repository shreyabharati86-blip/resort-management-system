import React, { useState } from "react";
import "./UserDashboard.css";

function UserDashboard() {

  /* ================= PROFILE ================= */

  const [profile, setProfile] = useState({
    name: "Shreya Bharati",
    email: "shreya@example.com",
    phone: "9876543210",
    dob: "",
    gender: "Female",
    aadhar: "",
    address: "",
    city: "Pune",
    state: "Maharashtra",
    pincode: "",
    emergencyName: "",
    emergencyPhone: ""
  });

  const [editProfile, setEditProfile] = useState(false);

  const [profileForm, setProfileForm] = useState(profile);

  const handleProfileChange = (e) => {
    setProfileForm({
      ...profileForm,
      [e.target.name]: e.target.value
    });
  };

  const saveProfile = () => {
    setProfile(profileForm);
    setEditProfile(false);
    alert("Profile updated successfully!");
  };

  /* ================= ROOMS ================= */

  const rooms = [
    {
      id: 1,
      name: "Deluxe Ocean View",
      type: "Deluxe",
      price: 4500,
      guests: 2,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
      description:
        "Beautiful ocean-view room with a king-size bed and modern facilities."
    },
    {
      id: 2,
      name: "Royal Suite",
      type: "Suite",
      price: 6500,
      guests: 4,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
      description:
        "Spacious luxury suite with premium facilities and a private sitting area."
    },
    {
      id: 3,
      name: "Premium Garden Room",
      type: "Premium",
      price: 5200,
      guests: 3,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
      description:
        "Peaceful garden-facing room perfect for a relaxing resort stay."
    }
  ];

  const [selectedRoom, setSelectedRoom] = useState(null);

  /* ================= BOOKING ================= */

  const [bookingForm, setBookingForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1
  });

  const [bookingSummary, setBookingSummary] = useState(null);

  const handleBookingChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const openBooking = (room) => {
    setSelectedRoom(room);
    setBookingSummary(null);
  };

  const confirmBooking = () => {

    if (!bookingForm.checkIn || !bookingForm.checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    if (new Date(bookingForm.checkOut) <= new Date(bookingForm.checkIn)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const days =
      Math.ceil(
        (new Date(bookingForm.checkOut) -
          new Date(bookingForm.checkIn)) /
          (1000 * 60 * 60 * 24)
      );

    const total = days * selectedRoom.price;

    setBookingSummary({
      id: "RH" + Math.floor(1000 + Math.random() * 9000),
      room: selectedRoom,
      checkIn: bookingForm.checkIn,
      checkOut: bookingForm.checkOut,
      guests: bookingForm.guests,
      days,
      total
    });
  };

  /* ================= BOOKINGS ================= */

  const [bookings, setBookings] = useState([
    {
      id: "RH1024",
      room: "Deluxe Ocean View",
      checkIn: "2026-08-28",
      checkOut: "2026-08-30",
      guests: 2,
      amount: 9000,
      status: "Confirmed",
      payment: "Paid"
    },
    {
      id: "RH1012",
      room: "Royal Suite",
      checkIn: "2026-08-15",
      checkOut: "2026-08-17",
      guests: 3,
      amount: 13000,
      status: "Completed",
      payment: "Paid"
    }
  ]);

  const completeBooking = () => {

    const newBooking = {
      id: bookingSummary.id,
      room: bookingSummary.room.name,
      checkIn: bookingSummary.checkIn,
      checkOut: bookingSummary.checkOut,
      guests: bookingSummary.guests,
      amount: bookingSummary.total,
      status: "Confirmed",
      payment: "Paid"
    };

    setBookings([newBooking, ...bookings]);

    setBookingSummary(null);
    setSelectedRoom(null);

    alert(
      `Booking confirmed successfully!\nBooking ID: ${newBooking.id}`
    );

    document
      .getElementById("bookings")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const cancelBooking = (id) => {

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    setBookings(
      bookings.map((booking) =>
        booking.id === id
          ? { ...booking, status: "Cancelled" }
          : booking
      )
    );

    alert("Booking cancelled successfully.");
  };

  /* ================= SERVICES ================= */

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Room Cleaning",
      icon: "🧹",
      status: "Completed"
    },
    {
      id: 2,
      name: "Extra Towels",
      icon: "🛁",
      status: "Available"
    },
    {
      id: 3,
      name: "Room Service",
      icon: "🍽️",
      status: "Available"
    },
    {
      id: 4,
      name: "Laundry",
      icon: "👕",
      status: "Available"
    }
  ]);

  const requestService = (id) => {

    setServices(
      services.map((service) =>
        service.id === id
          ? { ...service, status: "Requested" }
          : service
      )
    );

    alert("Service request submitted successfully!");
  };

  /* ================= PAYMENTS ================= */

  const payments = bookings
    .filter((booking) => booking.payment === "Paid")
    .map((booking) => ({
      id: "TXN-" + booking.id,
      booking: booking.id,
      amount: booking.amount,
      date: booking.checkIn,
      method: "UPI",
      status: "Paid"
    }));

  /* ================= FEEDBACK ================= */

  const [feedback, setFeedback] = useState({
    rating: 0,
    message: ""
  });

  const submitFeedback = () => {

    if (feedback.rating === 0) {
      alert("Please select a rating.");
      return;
    }

    if (!feedback.message.trim()) {
      alert("Please write your feedback.");
      return;
    }

    alert("Thank you! Your feedback has been submitted.");

    setFeedback({
      rating: 0,
      message: ""
    });
  };

  /* ================= MODALS ================= */

  const [activeModal, setActiveModal] = useState(null);

  /* ================= LOGOUT ================= */

  const logout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      alert("Logged out successfully!");
      window.location.href = "/";
    }
  };

  /* ================= HELPERS ================= */

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const upcomingBookings = bookings.filter(
    (booking) =>
      booking.status === "Confirmed"
  );

  const totalSpent = bookings.reduce(
    (sum, booking) => sum + booking.amount,
    0
  );

  return (
    <div className="user-page">

      {/* ================= NAVBAR ================= */}

      <nav className="user-navbar">

        <div
          className="user-logo"
          onClick={() => scrollTo("dashboard")}
        >
          🌴 <span>Royal Haven</span>
        </div>

        <div className="user-nav-links">

          <button onClick={() => scrollTo("dashboard")}>
            Home
          </button>

          <button onClick={() => scrollTo("rooms")}>
            Rooms
          </button>

          <button onClick={() => scrollTo("bookings")}>
            My Bookings
          </button>

          <button onClick={() => scrollTo("services")}>
            Services
          </button>

          <button onClick={() => setActiveModal("profile")}>
            My Profile
          </button>

          <button
            className="nav-logout"
            onClick={logout}
          >
            Logout
          </button>

        </div>

        <button
          className="mobile-menu-btn"
          onClick={() =>
            setActiveModal("menu")
          }
        >
          ☰
        </button>

      </nav>

      {/* ================= HERO ================= */}

      <section
        id="dashboard"
        className="user-hero"
      >

        <div className="hero-overlay">

          <div className="hero-content">

            <span className="welcome-small">
              WELCOME BACK
            </span>

            <h1>
              Hello, {profile.name.split(" ")[0]} 👋
            </h1>

            <p>
              Your next relaxing getaway is just a
              booking away.
            </p>

            <button
              className="hero-btn"
              onClick={() => scrollTo("rooms")}
            >
              Explore Rooms →
            </button>

          </div>

        </div>

      </section>

      {/* ================= QUICK STATS ================= */}

      <section className="user-container">

        <div className="quick-stats">

          <div className="quick-card">
            <span>📅</span>
            <div>
              <h3>{bookings.length}</h3>
              <p>Total Bookings</p>
            </div>
          </div>

          <div className="quick-card">
            <span>🏨</span>
            <div>
              <h3>{upcomingBookings.length}</h3>
              <p>Upcoming Stay</p>
            </div>
          </div>

          <div className="quick-card">
            <span>💳</span>
            <div>
              <h3>
                ₹{totalSpent.toLocaleString()}
              </h3>
              <p>Total Spent</p>
            </div>
          </div>

          <div className="quick-card">
            <span>⭐</span>
            <div>
              <h3>450</h3>
              <p>Reward Points</p>
            </div>
          </div>

        </div>

        {/* ================= UPCOMING STAY ================= */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <span className="section-label">
                YOUR STAY
              </span>

              <h2>Upcoming Stay</h2>
            </div>

            <button
              className="text-btn"
              onClick={() => scrollTo("bookings")}
            >
              View All →
            </button>

          </div>

          {upcomingBookings.length > 0 ? (

            <div className="upcoming-card">

              <div className="upcoming-image">
                <img
                  src={rooms[0].image}
                  alt="Room"
                />
              </div>

              <div className="upcoming-info">

                <span className="confirmed">
                  ● Confirmed
                </span>

                <h2>
                  {upcomingBookings[0].room}
                </h2>

                <div className="stay-details">

                  <div>
                    <small>CHECK-IN</small>
                    <strong>
                      {upcomingBookings[0].checkIn}
                    </strong>
                  </div>

                  <div>
                    <small>CHECK-OUT</small>
                    <strong>
                      {upcomingBookings[0].checkOut}
                    </strong>
                  </div>

                  <div>
                    <small>GUESTS</small>
                    <strong>
                      👥 {upcomingBookings[0].guests}
                    </strong>
                  </div>

                </div>

                <div className="booking-actions">

                  <button
                    className="primary-btn"
                    onClick={() =>
                      setActiveModal(
                        "booking-details"
                      )
                    }
                  >
                    View Details
                  </button>

                  <button
                    className="danger-btn"
                    onClick={() =>
                      cancelBooking(
                        upcomingBookings[0].id
                      )
                    }
                  >
                    Cancel Booking
                  </button>

                </div>

              </div>

            </div>

          ) : (

            <div className="empty-state">
              <h3>No upcoming stays</h3>
              <p>
                Book your next relaxing stay with us.
              </p>

              <button
                className="primary-btn"
                onClick={() => scrollTo("rooms")}
              >
                Explore Rooms
              </button>
            </div>

          )}

        </section>

        {/* ================= QUICK ACTIONS ================= */}

        <section className="dashboard-section">

          <div className="section-heading">
            <div>
              <span className="section-label">
                SERVICES
              </span>

              <h2>Quick Actions</h2>
            </div>
          </div>

          <div className="quick-actions">

            <button
              onClick={() => scrollTo("rooms")}
            >
              <span>🏨</span>
              <strong>Book a Room</strong>
              <small>Find your perfect stay</small>
            </button>

            <button
              onClick={() => scrollTo("services")}
            >
              <span>🧹</span>
              <strong>Request Service</strong>
              <small>Need something?</small>
            </button>

            <button
              onClick={() =>
                setActiveModal("payments")
              }
            >
              <span>💳</span>
              <strong>Payments</strong>
              <small>View transactions</small>
            </button>

            <button
              onClick={() =>
                setActiveModal("feedback")
              }
            >
              <span>⭐</span>
              <strong>Give Feedback</strong>
              <small>Share your experience</small>
            </button>

          </div>

        </section>

        {/* ================= ROOMS ================= */}

        <section
          id="rooms"
          className="dashboard-section"
        >

          <div className="section-heading">

            <div>
              <span className="section-label">
                DISCOVER
              </span>

              <h2>Rooms & Suites</h2>
            </div>

            <button
              className="text-btn"
              onClick={() =>
                setActiveModal("all-rooms")
              }
            >
              View All →
            </button>

          </div>

          <div className="rooms-grid">

            {rooms.map((room) => (

              <div
                className="room-card"
                key={room.id}
              >

                <div className="room-image">

                  <img
                    src={room.image}
                    alt={room.name}
                  />

                  <span>
                    {room.type}
                  </span>

                </div>

                <div className="room-content">

                  <h3>{room.name}</h3>

                  <p>
                    {room.description}
                  </p>

                  <div className="room-meta">
                    👥 Up to {room.guests} guests
                  </div>

                  <div className="room-bottom">

                    <div>
                      <strong>
                        ₹{room.price.toLocaleString()}
                      </strong>
                      <small>/night</small>
                    </div>

                    <button
                      className="primary-btn"
                      onClick={() =>
                        openBooking(room)
                      }
                    >
                      Book Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ================= BOOKINGS ================= */}

        <section
          id="bookings"
          className="dashboard-section"
        >

          <div className="section-heading">

            <div>
              <span className="section-label">
                YOUR HISTORY
              </span>

              <h2>My Bookings</h2>
            </div>

          </div>

          <div className="booking-table-wrapper">

            <table className="booking-table">

              <thead>

                <tr>
                  <th>Booking</th>
                  <th>Room</th>
                  <th>Dates</th>
                  <th>Guests</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {bookings.map((booking) => (

                  <tr key={booking.id}>

                    <td>
                      <strong>
                        {booking.id}
                      </strong>
                    </td>

                    <td>
                      {booking.room}
                    </td>

                    <td>
                      {booking.checkIn}
                      <br />
                      →
                      <br />
                      {booking.checkOut}
                    </td>

                    <td>
                      {booking.guests}
                    </td>

                    <td>
                      ₹{booking.amount.toLocaleString()}
                    </td>

                    <td>

                      <span
                        className={`status ${booking.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {booking.status}
                      </span>

                    </td>

                    <td>

                      {booking.status ===
                        "Confirmed" && (

                        <button
                          className="small-danger"
                          onClick={() =>
                            cancelBooking(
                              booking.id
                            )
                          }
                        >
                          Cancel
                        </button>

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* ================= SERVICES ================= */}

        <section
          id="services"
          className="dashboard-section"
        >

          <div className="section-heading">

            <div>
              <span className="section-label">
                RESORT SERVICES
              </span>

              <h2>Need Something?</h2>
            </div>

          </div>

          <div className="services-grid">

            {services.map((service) => (

              <div
                className="service-card"
                key={service.id}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.name}</h3>

                <span
                  className={
                    service.status === "Requested"
                      ? "service-requested"
                      : "service-available"
                  }
                >
                  {service.status}
                </span>

                <button
                  className="primary-btn"
                  disabled={
                    service.status ===
                    "Requested"
                  }
                  onClick={() =>
                    requestService(service.id)
                  }
                >
                  {service.status ===
                  "Requested"
                    ? "Requested ✓"
                    : "Request Service"}
                </button>

              </div>

            ))}

          </div>

        </section>

        {/* ================= PROFILE PREVIEW ================= */}

        <section className="profile-section">

          <div className="profile-avatar">
            {profile.name
              .charAt(0)
              .toUpperCase()}
          </div>

          <div className="profile-preview">

            <span className="section-label">
              YOUR ACCOUNT
            </span>

            <h2>
              {profile.name}
            </h2>

            <p>
              {profile.email}
            </p>

            <p>
              📞 {profile.phone}
            </p>

          </div>

          <button
            className="primary-btn"
            onClick={() =>
              setActiveModal("profile")
            }
          >
            Edit Profile
          </button>

        </section>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="user-footer">

        <div>
          <h2>🌴 Royal Haven</h2>
          <p>
            Your perfect resort getaway.
          </p>
        </div>

        <div className="footer-links">

          <button
            onClick={() => scrollTo("dashboard")}
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("rooms")}
          >
            Rooms
          </button>

          <button
            onClick={() => scrollTo("bookings")}
          >
            Bookings
          </button>

          <button
            onClick={() => scrollTo("services")}
          >
            Services
          </button>

        </div>

        <p>
          © 2026 Royal Haven Resort
        </p>

      </footer>

      {/* =====================================================
          BOOKING MODAL
      ===================================================== */}

      {selectedRoom && !bookingSummary && (

        <div className="modal-overlay">

          <div className="modal-box">

            <button
              className="modal-close"
              onClick={() =>
                setSelectedRoom(null)
              }
            >
              ×
            </button>

            <img
              src={selectedRoom.image}
              alt={selectedRoom.name}
            />

            <h2>
              {selectedRoom.name}
            </h2>

            <p>
              {selectedRoom.description}
            </p>

            <div className="booking-form">

              <label>
                Check-in
                <input
                  type="date"
                  name="checkIn"
                  value={bookingForm.checkIn}
                  onChange={handleBookingChange}
                />
              </label>

              <label>
                Check-out
                <input
                  type="date"
                  name="checkOut"
                  value={bookingForm.checkOut}
                  onChange={handleBookingChange}
                />
              </label>

              <label>
                Guests
                <select
                  name="guests"
                  value={bookingForm.guests}
                  onChange={handleBookingChange}
                >
                  <option value="1">
                    1 Guest
                  </option>

                  <option value="2">
                    2 Guests
                  </option>

                  <option value="3">
                    3 Guests
                  </option>

                  <option value="4">
                    4 Guests
                  </option>
                </select>
              </label>

            </div>

            <button
              className="primary-btn full-btn"
              onClick={confirmBooking}
            >
              Continue →
            </button>

          </div>

        </div>

      )}

      {/* =====================================================
          BOOKING SUMMARY
      ===================================================== */}

      {bookingSummary && (

        <div className="modal-overlay">

          <div className="modal-box">

            <button
              className="modal-close"
              onClick={() =>
                setBookingSummary(null)
              }
            >
              ×
            </button>

            <h2>Booking Summary</h2>

            <div className="summary-box">

              <p>
                <strong>Room:</strong>{" "}
                {bookingSummary.room.name}
              </p>

              <p>
                <strong>Check-in:</strong>{" "}
                {bookingSummary.checkIn}
              </p>

              <p>
                <strong>Check-out:</strong>{" "}
                {bookingSummary.checkOut}
              </p>

              <p>
                <strong>Guests:</strong>{" "}
                {bookingSummary.guests}
              </p>

              <p>
                <strong>Nights:</strong>{" "}
                {bookingSummary.days}
              </p>

              <hr />

              <h3>
                Total: ₹
                {bookingSummary.total.toLocaleString()}
              </h3>

            </div>

            <button
              className="primary-btn full-btn"
              onClick={completeBooking}
            >
              Confirm & Pay →
            </button>

          </div>

        </div>

      )}

      {/* =====================================================
          PROFILE MODAL
      ===================================================== */}

      {activeModal === "profile" && (

        <div className="modal-overlay">

          <div className="modal-box profile-modal">

            <button
              className="modal-close"
              onClick={() =>
                setActiveModal(null)
              }
            >
              ×
            </button>

            <div className="large-avatar">
              {profile.name
                .charAt(0)
                .toUpperCase()}
            </div>

            <h2>My Profile</h2>

            <p className="modal-subtitle">
              Update your personal information.
            </p>

            <div className="profile-form">

              <label>
                Full Name
                <input
                  name="name"
                  value={profileForm.name}
                  onChange={handleProfileChange}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={profileForm.email}
                  onChange={handleProfileChange}
                />
              </label>

              <label>
                Mobile Number
                <input
                  name="phone"
                  value={profileForm.phone}
                  onChange={handleProfileChange}
                />
              </label>

              <label>
                Date of Birth
                <input
                  type="date"
                  name="dob"
                  value={profileForm.dob}
                  onChange={handleProfileChange}
                />
              </label>

              <label>
                Gender
                <select
                  name="gender"
                  value={profileForm.gender}
                  onChange={handleProfileChange}
                >
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                  <option>Prefer not to say</option>
                </select>
              </label>

              <label>
                Aadhar Number
                <input
                  name="aadhar"
                  value={profileForm.aadhar}
                  onChange={handleProfileChange}
                  placeholder="Enter Aadhar number"
                  maxLength="12"
                />
              </label>

              <label className="full-field">
                Address
                <textarea
                  name="address"
                  value={profileForm.address}
                  onChange={handleProfileChange}
                  placeholder="Enter your complete address"
                />
              </label>

              <label>
                City
                <input
                  name="city"
                  value={profileForm.city}
                  onChange={handleProfileChange}
                />
              </label>

              <label>
                State
                <input
                  name="state"
                  value={profileForm.state}
                  onChange={handleProfileChange}
                />
              </label>

              <label>
                Pincode
                <input
                  name="pincode"
                  value={profileForm.pincode}
                  onChange={handleProfileChange}
                />
              </label>

              <label>
                Emergency Contact Name
                <input
                  name="emergencyName"
                  value={profileForm.emergencyName}
                  onChange={handleProfileChange}
                />
              </label>

              <label>
                Emergency Contact Number
                <input
                  name="emergencyPhone"
                  value={profileForm.emergencyPhone}
                  onChange={handleProfileChange}
                />
              </label>

            </div>

            <div className="modal-buttons">

              <button
                className="cancel-btn"
                onClick={() =>
                  setActiveModal(null)
                }
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={saveProfile}
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          PAYMENTS MODAL
      ===================================================== */}

      {activeModal === "payments" && (

        <div className="modal-overlay">

          <div className="modal-box wide-modal">

            <button
              className="modal-close"
              onClick={() =>
                setActiveModal(null)
              }
            >
              ×
            </button>

            <h2>Payment History</h2>

            {payments.length > 0 ? (

              <div className="payment-list">

                {payments.map((payment) => (

                  <div
                    className="payment-card"
                    key={payment.id}
                  >

                    <div>
                      <strong>
                        {payment.id}
                      </strong>

                      <p>
                        Booking:{" "}
                        {payment.booking}
                      </p>
                    </div>

                    <div>
                      <strong>
                        ₹
                        {payment.amount.toLocaleString()}
                      </strong>

                      <p>
                        {payment.method} •{" "}
                        {payment.status}
                      </p>
                    </div>

                  </div>

                ))}

              </div>

            ) : (

              <div className="empty-state">
                No payment records found.
              </div>

            )}

          </div>

        </div>

      )}

      {/* =====================================================
          FEEDBACK MODAL
      ===================================================== */}

      {activeModal === "feedback" && (

        <div className="modal-overlay">

          <div className="modal-box">

            <button
              className="modal-close"
              onClick={() =>
                setActiveModal(null)
              }
            >
              ×
            </button>

            <h2>Share Your Experience</h2>

            <p className="modal-subtitle">
              How was your experience at Royal Haven?
            </p>

            <div className="rating">

              {[1, 2, 3, 4, 5].map((star) => (

                <button
                  key={star}
                  className={
                    star <= feedback.rating
                      ? "star active"
                      : "star"
                  }
                  onClick={() =>
                    setFeedback({
                      ...feedback,
                      rating: star
                    })
                  }
                >
                  ★
                </button>

              ))}

            </div>

            <textarea
              className="feedback-input"
              placeholder="Write your feedback..."
              value={feedback.message}
              onChange={(e) =>
                setFeedback({
                  ...feedback,
                  message: e.target.value
                })
              }
            />

            <button
              className="primary-btn full-btn"
              onClick={submitFeedback}
            >
              Submit Feedback
            </button>

          </div>

        </div>

      )}

      {/* =====================================================
          BOOKING DETAILS
      ===================================================== */}

      {activeModal === "booking-details" && (

        <div className="modal-overlay">

          <div className="modal-box">

            <button
              className="modal-close"
              onClick={() =>
                setActiveModal(null)
              }
            >
              ×
            </button>

            <h2>Booking Details</h2>

            {upcomingBookings[0] && (

              <div className="summary-box">

                <p>
                  <strong>Booking ID:</strong>{" "}
                  {upcomingBookings[0].id}
                </p>

                <p>
                  <strong>Room:</strong>{" "}
                  {upcomingBookings[0].room}
                </p>

                <p>
                  <strong>Check-in:</strong>{" "}
                  {upcomingBookings[0].checkIn}
                </p>

                <p>
                  <strong>Check-out:</strong>{" "}
                  {upcomingBookings[0].checkOut}
                </p>

                <p>
                  <strong>Guests:</strong>{" "}
                  {upcomingBookings[0].guests}
                </p>

                <p>
                  <strong>Amount:</strong> ₹
                  {upcomingBookings[0].amount.toLocaleString()}
                </p>

                <p>
                  <strong>Payment:</strong>{" "}
                  {upcomingBookings[0].payment}
                </p>

              </div>

            )}

            <button
              className="cancel-btn full-btn"
              onClick={() =>
                setActiveModal(null)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =====================================================
          ALL ROOMS
      ===================================================== */}

      {activeModal === "all-rooms" && (

        <div className="modal-overlay">

          <div className="modal-box wide-modal">

            <button
              className="modal-close"
              onClick={() =>
                setActiveModal(null)
              }
            >
              ×
            </button>

            <h2>All Rooms & Suites</h2>

            <div className="rooms-grid">

              {rooms.map((room) => (

                <div
                  className="room-card"
                  key={room.id}
                >

                  <div className="room-image">

                    <img
                      src={room.image}
                      alt={room.name}
                    />

                  </div>

                  <div className="room-content">

                    <h3>{room.name}</h3>

                    <p>
                      {room.description}
                    </p>

                    <div className="room-bottom">

                      <strong>
                        ₹{room.price}/night
                      </strong>

                      <button
                        className="primary-btn"
                        onClick={() => {
                          setActiveModal(null);
                          openBooking(room);
                        }}
                      >
                        Book Now
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {activeModal === "menu" && (

        <div className="mobile-menu">

          <button
            onClick={() => {
              setActiveModal(null);
              scrollTo("dashboard");
            }}
          >
            Home
          </button>

          <button
            onClick={() => {
              setActiveModal(null);
              scrollTo("rooms");
            }}
          >
            Rooms
          </button>

          <button
            onClick={() => {
              setActiveModal(null);
              scrollTo("bookings");
            }}
          >
            My Bookings
          </button>

          <button
            onClick={() => {
              setActiveModal(null);
              scrollTo("services");
            }}
          >
            Services
          </button>

          <button
            onClick={() =>
              setActiveModal("profile")
            }
          >
            My Profile
          </button>

          <button
            onClick={logout}
          >
            Logout
          </button>

        </div>

      )}

    </div>
  );
}

export default UserDashboard;