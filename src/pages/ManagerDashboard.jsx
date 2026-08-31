import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import "./ManagerDashboard.css";

function ManagerDashboard() {

  /* =========================
     MAIN DATA
  ========================= */

  const [bookings, setBookings] = useState([
    {
      id: "B001",
      guest: "Priya Shah",
      room: "101",
      date: "25 Aug 2026",
      status: "Confirmed",
      payment: "Paid"
    },
    {
      id: "B002",
      guest: "Rohan Mehta",
      room: "102",
      date: "26 Aug 2026",
      status: "Pending",
      payment: "Pending"
    },
    {
      id: "B003",
      guest: "Neha Kulkarni",
      room: "104",
      date: "27 Aug 2026",
      status: "Confirmed",
      payment: "Paid"
    }
  ]);

  const [rooms, setRooms] = useState([
    { id: 101, type: "Deluxe", status: "Available" },
    { id: 102, type: "Suite", status: "Occupied" },
    { id: 103, type: "Premium", status: "Maintenance" },
    { id: 104, type: "Deluxe", status: "Available" },
    { id: 105, type: "Suite", status: "Occupied" },
    { id: 106, type: "Premium", status: "Available" }
  ]);

  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Rahul Patil",
      role: "Housekeeping",
      shift: "Morning",
      status: "Available",
      task: "Room Cleaning"
    },
    {
      id: 2,
      name: "Sneha Joshi",
      role: "Reception",
      shift: "Evening",
      status: "Working",
      task: "Front Desk"
    },
    {
      id: 3,
      name: "Akash More",
      role: "Housekeeping",
      shift: "Morning",
      status: "Available",
      task: "Room Cleaning"
    }
  ]);

  const [guests] = useState([
    {
      id: 1,
      name: "Priya Shah",
      phone: "9876543210",
      email: "priya@gmail.com",
      room: "101"
    },
    {
      id: 2,
      name: "Rohan Mehta",
      phone: "9876543211",
      email: "rohan@gmail.com",
      room: "102"
    },
    {
      id: 3,
      name: "Neha Kulkarni",
      phone: "9876543212",
      email: "neha@gmail.com",
      room: "104"
    }
  ]);

  const [housekeeping, setHousekeeping] = useState([
    {
      id: 1,
      room: "103",
      task: "Deep Cleaning",
      assigned: "Rahul Patil",
      status: "Pending"
    },
    {
      id: 2,
      room: "101",
      task: "Regular Cleaning",
      assigned: "Akash More",
      status: "Completed"
    }
  ]);

  const [payments, setPayments] = useState([
    {
      id: "P001",
      guest: "Priya Shah",
      amount: 8500,
      method: "Card",
      status: "Paid"
    },
    {
      id: "P002",
      guest: "Rohan Mehta",
      amount: 6500,
      method: "UPI",
      status: "Pending"
    },
    {
      id: "P003",
      guest: "Neha Kulkarni",
      amount: 9200,
      method: "Card",
      status: "Paid"
    }
  ]);

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      guest: "Priya Shah",
      message: "Excellent service.",
      rating: 5,
      status: "Open"
    },
    {
      id: 2,
      guest: "Rohan Mehta",
      message: "Room service was delayed.",
      rating: 3,
      status: "Open"
    },
    {
      id: 3,
      guest: "Neha Kulkarni",
      message: "Very clean rooms.",
      rating: 5,
      status: "Resolved"
    }
  ]);

  /* =========================
     POPUPS
  ========================= */

  const [showGuests, setShowGuests] = useState(false);
  const [showStaff, setShowStaff] = useState(false);
  const [showRooms, setShowRooms] = useState(false);
  const [showBookings, setShowBookings] = useState(false);
  const [showHousekeeping, setShowHousekeeping] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showReports, setShowReports] = useState(false);

  /* =========================
     BOOKING FUNCTIONS
  ========================= */

  const updateBookingStatus = (id, status) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id
          ? { ...booking, status }
          : booking
      )
    );
  };

  const checkInGuest = (id) => {
    const booking = bookings.find((b) => b.id === id);

    if (!booking) return;

    setBookings(
      bookings.map((b) =>
        b.id === id
          ? { ...b, status: "Checked-in" }
          : b
      )
    );

    setRooms(
      rooms.map((room) =>
        String(room.id) === String(booking.room)
          ? { ...room, status: "Occupied" }
          : room
      )
    );

    alert(`${booking.guest} checked-in successfully.`);
  };

  const checkOutGuest = (id) => {
    const booking = bookings.find((b) => b.id === id);

    if (!booking) return;

    setBookings(
      bookings.map((b) =>
        b.id === id
          ? { ...b, status: "Checked-out" }
          : b
      )
    );

    setRooms(
      rooms.map((room) =>
        String(room.id) === String(booking.room)
          ? { ...room, status: "Maintenance" }
          : room
      )
    );

    alert(`${booking.guest} checked-out. Room sent for cleaning.`);
  };

  /* =========================
     ROOM FUNCTIONS
  ========================= */

  const changeRoomStatus = (id, status) => {
    setRooms(
      rooms.map((room) =>
        room.id === id
          ? { ...room, status }
          : room
      )
    );
  };

  /* =========================
     STAFF FUNCTIONS
  ========================= */

  const changeStaffShift = (id, shift) => {
    setStaff(
      staff.map((member) =>
        member.id === id
          ? { ...member, shift }
          : member
      )
    );
  };

  const changeStaffTask = (id, task) => {
    setStaff(
      staff.map((member) =>
        member.id === id
          ? { ...member, task }
          : member
      )
    );
  };

  const changeStaffStatus = (id, status) => {
    setStaff(
      staff.map((member) =>
        member.id === id
          ? { ...member, status }
          : member
      )
    );
  };

  /* =========================
     HOUSEKEEPING
  ========================= */

  const updateHousekeeping = (id, status) => {
    setHousekeeping(
      housekeeping.map((task) =>
        task.id === id
          ? { ...task, status }
          : task
      )
    );

    if (status === "Completed") {
      const task = housekeeping.find(
        (item) => item.id === id
      );

      if (task) {
        setRooms(
          rooms.map((room) =>
            String(room.id) === String(task.room)
              ? { ...room, status: "Available" }
              : room
          )
        );
      }
    }
  };

  /* =========================
     PAYMENT
  ========================= */

  const updatePaymentStatus = (id, status) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id
          ? { ...payment, status }
          : payment
      )
    );
  };

  /* =========================
     FEEDBACK
  ========================= */

  const resolveFeedback = (id) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? { ...item, status: "Resolved" }
          : item
      )
    );
  };

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      alert("Logged out successfully!");
      window.location.href = "/";
    }
  };

  /* =========================
     CHART DATA
  ========================= */

  const bookingChart = [
    { month: "Jan", bookings: 35 },
    { month: "Feb", bookings: 48 },
    { month: "Mar", bookings: 55 },
    { month: "Apr", bookings: 62 },
    { month: "May", bookings: 78 },
    { month: "Jun", bookings: 90 }
  ];

  const revenueChart = [
    { month: "Jan", revenue: 42000 },
    { month: "Feb", revenue: 51000 },
    { month: "Mar", revenue: 60000 },
    { month: "Apr", revenue: 68000 },
    { month: "May", revenue: 79000 },
    { month: "Jun", revenue: 92000 }
  ];

  /* =========================
     CALCULATIONS
  ========================= */

  const availableRooms = rooms.filter(
    (room) => room.status === "Available"
  ).length;

  const occupiedRooms = rooms.filter(
    (room) => room.status === "Occupied"
  ).length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const totalRevenue = payments
    .filter((payment) => payment.status === "Paid")
    .reduce(
      (total, payment) => total + payment.amount,
      0
    );

  return (
    <div className="manager-page">

      {/* ================= HEADER ================= */}

      <header className="manager-header">

        <div>
          <h2>Royal Haven</h2>
          <span>Manager Management Panel</span>
        </div>

        <div className="manager-user">
          👨‍💼 Manager

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>

      </header>

      <div className="manager-layout">

        {/* ================= SIDEBAR ================= */}

        <aside className="manager-sidebar">

          <h3>MANAGER PANEL</h3>

          <a href="#dashboard">📊 Dashboard</a>

          <a href="#bookings">📅 Bookings</a>

          <a href="#rooms">🏨 Rooms</a>

          <a href="#staff">👨‍🔧 Staff</a>

          <a href="#guests">👥 Guests</a>

          <a href="#housekeeping">🧹 Housekeeping</a>

          <a href="#payments">💳 Payments</a>

          <a href="#feedback">⭐ Feedback</a>

          <a href="#reports">📈 Reports</a>

        </aside>

        {/* ================= MAIN ================= */}

        <main className="manager-content">

          {/* DASHBOARD */}

          <section id="dashboard">

            <h1>Manager Dashboard</h1>

            <p className="dashboard-subtitle">
              Monitor and manage daily resort operations.
            </p>

            <div className="stats-grid">

              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <h2>{bookings.length}</h2>
                <p>Total Bookings</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">⏳</div>
                <h2>{pendingBookings}</h2>
                <p>Pending Bookings</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🏨</div>
                <h2>{availableRooms}</h2>
                <p>Available Rooms</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🛏️</div>
                <h2>{occupiedRooms}</h2>
                <p>Occupied Rooms</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">👨‍🔧</div>
                <h2>{staff.length}</h2>
                <p>Total Staff</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <h2>₹{totalRevenue.toLocaleString()}</h2>
                <p>Paid Revenue</p>
              </div>

            </div>

            <div className="charts-grid">

              <div className="chart-card">

                <h3>Booking Overview</h3>

                <ResponsiveContainer
                  width="100%"
                  height={280}
                >

                  <BarChart data={bookingChart}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                      dataKey="bookings"
                      fill="#168aad"
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

              <div className="chart-card">

                <h3>Revenue Overview</h3>

                <ResponsiveContainer
                  width="100%"
                  height={280}
                >

                  <LineChart data={revenueChart}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#173b4d"
                      strokeWidth={3}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>

            </div>

          </section>

          {/* BOOKINGS */}

          <section
            id="bookings"
            className="manager-section"
          >

            <div className="section-title">

              <div>
                <h2>Booking Management</h2>
                <p>
                  Manage reservations, check-in and check-out.
                </p>
              </div>

              <button
                className="primary-btn"
                onClick={() => setShowBookings(true)}
              >
                View All Bookings
              </button>

            </div>

            <table>

              <thead>

                <tr>
                  <th>ID</th>
                  <th>Guest</th>
                  <th>Room</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {bookings.map((booking) => (

                  <tr key={booking.id}>

                    <td>{booking.id}</td>

                    <td>{booking.guest}</td>

                    <td>{booking.room}</td>

                    <td>{booking.date}</td>

                    <td>
                      <span className="active-status">
                        {booking.status}
                      </span>
                    </td>

                    <td>

                      {booking.status === "Pending" && (
                        <button
                          className="edit-btn"
                          onClick={() =>
                            updateBookingStatus(
                              booking.id,
                              "Confirmed"
                            )
                          }
                        >
                          Confirm
                        </button>
                      )}

                      {booking.status === "Confirmed" && (
                        <button
                          className="edit-btn"
                          onClick={() =>
                            checkInGuest(booking.id)
                          }
                        >
                          Check-in
                        </button>
                      )}

                      {booking.status === "Checked-in" && (
                        <button
                          className="edit-btn"
                          onClick={() =>
                            checkOutGuest(booking.id)
                          }
                        >
                          Check-out
                        </button>
                      )}

                      {(booking.status === "Pending" ||
                        booking.status === "Confirmed") && (
                        <button
                          className="delete-btn"
                          onClick={() =>
                            updateBookingStatus(
                              booking.id,
                              "Cancelled"
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

          </section>

          {/* ROOMS */}

          <section
            id="rooms"
            className="manager-section"
          >

            <div className="section-title">

              <div>
                <h2>Room Management</h2>
                <p>
                  Manage availability and room status.
                </p>
              </div>

              <button
                className="primary-btn"
                onClick={() => setShowRooms(true)}
              >
                Manage Rooms
              </button>

            </div>

            <div className="room-stats">

              <div>
                <h3>{availableRooms}</h3>
                <p>Available</p>
              </div>

              <div>
                <h3>{occupiedRooms}</h3>
                <p>Occupied</p>
              </div>

              <div>
                <h3>
                  {
                    rooms.filter(
                      (room) =>
                        room.status === "Maintenance"
                    ).length
                  }
                </h3>
                <p>Maintenance</p>
              </div>

            </div>

          </section>

          {/* STAFF */}

          <section
            id="staff"
            className="manager-section"
          >

            <div className="section-title">

              <div>
                <h2>Staff Management</h2>
                <p>
                  Assign shifts and daily tasks to staff.
                </p>
              </div>

              <button
                className="primary-btn"
                onClick={() => setShowStaff(true)}
              >
                Manage Staff
              </button>

            </div>

            <table>

              <thead>

                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Shift</th>
                  <th>Task</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                {staff.map((member) => (

                  <tr key={member.id}>

                    <td>{member.name}</td>

                    <td>{member.role}</td>

                    <td>{member.shift}</td>

                    <td>{member.task}</td>

                    <td>
                      <span className="active-status">
                        {member.status}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </section>

          {/* GUESTS */}

          <section
            id="guests"
            className="manager-section"
          >

            <div className="section-title">

              <div>
                <h2>Guest Management</h2>
                <p>
                  View current and registered guests.
                </p>
              </div>

              <button
                className="primary-btn"
                onClick={() => setShowGuests(true)}
              >
                View Guests
              </button>

            </div>

            <div className="management-box">

              <div>
                <h3>{guests.length} Current Guests</h3>
                <p>
                  View guest contact and room information.
                </p>
              </div>

            </div>

          </section>

          {/* HOUSEKEEPING */}

          <section
            id="housekeeping"
            className="manager-section"
          >

            <div className="section-title">

              <div>
                <h2>Housekeeping</h2>
                <p>
                  Manage cleaning and maintenance tasks.
                </p>
              </div>

              <button
                className="primary-btn"
                onClick={() =>
                  setShowHousekeeping(true)
                }
              >
                Manage Tasks
              </button>

            </div>

            <table>

              <thead>

                <tr>
                  <th>Room</th>
                  <th>Task</th>
                  <th>Assigned Staff</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                {housekeeping.map((task) => (

                  <tr key={task.id}>

                    <td>{task.room}</td>

                    <td>{task.task}</td>

                    <td>{task.assigned}</td>

                    <td>
                      <span className="active-status">
                        {task.status}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </section>

          {/* PAYMENTS */}

          <section
            id="payments"
            className="manager-section"
          >

            <div className="section-title">

              <div>
                <h2>Payment Management</h2>
                <p>
                  Monitor booking payments.
                </p>
              </div>

              <button
                className="primary-btn"
                onClick={() => setShowPayments(true)}
              >
                View Payments
              </button>

            </div>

            <div className="room-stats">

              <div>
                <h3>₹{totalRevenue.toLocaleString()}</h3>
                <p>Paid</p>
              </div>

              <div>

                <h3>
                  ₹
                  {payments
                    .filter(
                      (payment) =>
                        payment.status === "Pending"
                    )
                    .reduce(
                      (sum, payment) =>
                        sum + payment.amount,
                      0
                    )
                    .toLocaleString()}
                </h3>

                <p>Pending</p>

              </div>

              <div>

                <h3>
                  {payments.length}
                </h3>

                <p>Total Transactions</p>

              </div>

            </div>

          </section>

          {/* FEEDBACK */}

          <section
            id="feedback"
            className="manager-section"
          >

            <div className="section-title">

              <div>
                <h2>Feedback & Complaints</h2>
                <p>
                  Review and resolve guest complaints.
                </p>
              </div>

              <button
                className="primary-btn"
                onClick={() => setShowFeedback(true)}
              >
                View Feedback
              </button>

            </div>

          </section>

          {/* REPORTS */}

          <section
            id="reports"
            className="manager-section"
          >

            <div className="section-title">

              <div>
                <h2>Reports</h2>
                <p>
                  View daily resort performance.
                </p>
              </div>

              <button
                className="primary-btn"
                onClick={() => setShowReports(true)}
              >
                View Reports
              </button>

            </div>

          </section>

        </main>

      </div>

      {/* =========================
          GUEST POPUP
      ========================= */}

      {showGuests && (

        <div className="form-overlay">

          <div className="manager-form">

            <h2>Guest Details</h2>

            {guests.map((guest) => (

              <div
                key={guest.id}
                className="popup-item"
              >

                <strong>{guest.name}</strong>

                <p>
                  📞 {guest.phone}
                  <br />
                  ✉️ {guest.email}
                  <br />
                  🏨 Room {guest.room}
                </p>

              </div>

            ))}

            <button
              className="cancel-btn"
              onClick={() => setShowGuests(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =========================
          STAFF POPUP
      ========================= */}

      {showStaff && (

        <div className="form-overlay">

          <div className="manager-form">

            <h2>Manage Staff</h2>

            {staff.map((member) => (

              <div
                key={member.id}
                className="popup-item"
              >

                <strong>{member.name}</strong>

                <p>{member.role}</p>

                <select
                  value={member.shift}
                  onChange={(e) =>
                    changeStaffShift(
                      member.id,
                      e.target.value
                    )
                  }
                >

                  <option>Morning</option>
                  <option>Evening</option>
                  <option>Night</option>

                </select>

                <select
                  value={member.task}
                  onChange={(e) =>
                    changeStaffTask(
                      member.id,
                      e.target.value
                    )
                  }
                >

                  <option>Room Cleaning</option>
                  <option>Front Desk</option>
                  <option>Maintenance</option>
                  <option>Guest Service</option>

                </select>

                <select
                  value={member.status}
                  onChange={(e) =>
                    changeStaffStatus(
                      member.id,
                      e.target.value
                    )
                  }
                >

                  <option>Available</option>
                  <option>Working</option>
                  <option>Off Duty</option>

                </select>

              </div>

            ))}

            <button
              className="cancel-btn"
              onClick={() => setShowStaff(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =========================
          ROOM POPUP
      ========================= */}

      {showRooms && (

        <div className="form-overlay">

          <div className="manager-form">

            <h2>Manage Rooms</h2>

            {rooms.map((room) => (

              <div
                key={room.id}
                className="popup-item"
              >

                <strong>
                  Room {room.id}
                </strong>

                <p>{room.type} Room</p>

                <select
                  value={room.status}
                  onChange={(e) =>
                    changeRoomStatus(
                      room.id,
                      e.target.value
                    )
                  }
                >

                  <option>Available</option>
                  <option>Occupied</option>
                  <option>Maintenance</option>

                </select>

              </div>

            ))}

            <button
              className="cancel-btn"
              onClick={() => setShowRooms(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =========================
          BOOKING POPUP
      ========================= */}

      {showBookings && (

        <div className="form-overlay">

          <div
            className="manager-form"
            style={{ width: "650px" }}
          >

            <h2>All Bookings</h2>

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="popup-item"
              >

                <strong>
                  {booking.id} - {booking.guest}
                </strong>

                <p>
                  Room: {booking.room}
                  <br />
                  Date: {booking.date}
                  <br />
                  Payment: {booking.payment}
                </p>

                <span className="active-status">
                  {booking.status}
                </span>

              </div>

            ))}

            <button
              className="cancel-btn"
              onClick={() => setShowBookings(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =========================
          HOUSEKEEPING POPUP
      ========================= */}

      {showHousekeeping && (

        <div className="form-overlay">

          <div className="manager-form">

            <h2>Housekeeping Tasks</h2>

            {housekeeping.map((task) => (

              <div
                key={task.id}
                className="popup-item"
              >

                <strong>
                  Room {task.room}
                </strong>

                <p>
                  {task.task}
                  <br />
                  Assigned to: {task.assigned}
                </p>

                <select
                  value={task.status}
                  onChange={(e) =>
                    updateHousekeeping(
                      task.id,
                      e.target.value
                    )
                  }
                >

                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>

                </select>

              </div>

            ))}

            <button
              className="cancel-btn"
              onClick={() =>
                setShowHousekeeping(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =========================
          PAYMENTS POPUP
      ========================= */}

      {showPayments && (

        <div className="form-overlay">

          <div
            className="manager-form"
            style={{ width: "600px" }}
          >

            <h2>Payment Records</h2>

            {payments.map((payment) => (

              <div
                key={payment.id}
                className="popup-item"
              >

                <strong>
                  {payment.id} - {payment.guest}
                </strong>

                <p>
                  Amount: ₹{payment.amount}
                  <br />
                  Method: {payment.method}
                </p>

                <select
                  value={payment.status}
                  onChange={(e) =>
                    updatePaymentStatus(
                      payment.id,
                      e.target.value
                    )
                  }
                >

                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Refunded</option>

                </select>

              </div>

            ))}

            <button
              className="cancel-btn"
              onClick={() => setShowPayments(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =========================
          FEEDBACK POPUP
      ========================= */}

      {showFeedback && (

        <div className="form-overlay">

          <div className="manager-form">

            <h2>Guest Feedback</h2>

            {feedback.map((item) => (

              <div
                key={item.id}
                className="popup-item"
              >

                <strong>
                  {item.guest}
                </strong>

                <p>
                  {item.message}
                  <br />
                  {"⭐".repeat(item.rating)}
                </p>

                <span className="active-status">
                  {item.status}
                </span>

                {item.status === "Open" && (

                  <button
                    className="edit-btn"
                    onClick={() =>
                      resolveFeedback(item.id)
                    }
                  >
                    Mark Resolved
                  </button>

                )}

              </div>

            ))}

            <button
              className="cancel-btn"
              onClick={() => setShowFeedback(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =========================
          REPORT POPUP
      ========================= */}

      {showReports && (

        <div className="form-overlay">

          <div className="manager-form">

            <h2>Manager Reports</h2>

            <div className="popup-item">
              <strong>Today's Bookings</strong>
              <p>{bookings.length}</p>
            </div>

            <div className="popup-item">
              <strong>Available Rooms</strong>
              <p>{availableRooms}</p>
            </div>

            <div className="popup-item">
              <strong>Occupied Rooms</strong>
              <p>{occupiedRooms}</p>
            </div>

            <div className="popup-item">
              <strong>Staff Members</strong>
              <p>{staff.length}</p>
            </div>

            <div className="popup-item">
              <strong>Paid Revenue</strong>
              <p>₹{totalRevenue.toLocaleString()}</p>
            </div>

            <button
              className="cancel-btn"
              onClick={() => setShowReports(false)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default ManagerDashboard;