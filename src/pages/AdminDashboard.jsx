import React, { useState } from "react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import "./AdminDashboard.css";


function AdminDashboard() {

  /* =========================
     POPUP STATE
  ========================= */

  const [showForm, setShowForm] = useState(false);
  const [role, setRole] = useState("Manager");

  const [editingEmployee, setEditingEmployee] = useState(null);


  /* =========================
     MANAGERS
  ========================= */

  const [managers, setManagers] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      username: "amit",
      email: "amit@gmail.com",
      mobile: "9876543210",
      status: "Active"
    }
  ]);


  /* =========================
     STAFF
  ========================= */

  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Rahul Patil",
      username: "rahul",
      email: "rahul@gmail.com",
      mobile: "9876543211",
      status: "Active"
    },
    {
      id: 2,
      name: "Sneha Joshi",
      username: "sneha",
      email: "sneha@gmail.com",
      mobile: "9876543212",
      status: "Active"
    }
  ]);


  /* =========================
     FORM DATA
  ========================= */

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");


  /* =========================
     OTHER POPUPS
  ========================= */

  const [showUsers, setShowUsers] = useState(false);
  const [showRooms, setShowRooms] = useState(false);
  const [showBookings, setShowBookings] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);


  /* =========================
     ROOM DATA
  ========================= */

  const [rooms, setRooms] = useState([
    {
      id: 101,
      type: "Deluxe Room",
      status: "Available"
    },
    {
      id: 102,
      type: "Suite Room",
      status: "Occupied"
    },
    {
      id: 103,
      type: "Premium Room",
      status: "Maintenance"
    },
    {
      id: 104,
      type: "Deluxe Room",
      status: "Available"
    }
  ]);


  /* =========================
     USERS
  ========================= */

  const [users] = useState([
    {
      id: 1,
      name: "Priya Shah",
      email: "priya@gmail.com",
      status: "Active"
    },
    {
      id: 2,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      status: "Active"
    },
    {
      id: 3,
      name: "Neha Kulkarni",
      email: "neha@gmail.com",
      status: "Active"
    }
  ]);


  /* =========================
     BOOKINGS
  ========================= */

  const [bookings, setBookings] = useState([
    {
      id: "B001",
      user: "Priya Shah",
      room: "101",
      date: "20 Aug 2026",
      status: "Confirmed"
    },
    {
      id: "B002",
      user: "Rohan Mehta",
      room: "102",
      date: "22 Aug 2026",
      status: "Pending"
    },
    {
      id: "B003",
      user: "Neha Kulkarni",
      room: "104",
      date: "25 Aug 2026",
      status: "Confirmed"
    }
  ]);


  /* =========================
     FEEDBACK
  ========================= */

  const [feedback] = useState([
    {
      id: 1,
      user: "Priya Shah",
      message: "Excellent resort service.",
      rating: 5
    },
    {
      id: 2,
      user: "Rohan Mehta",
      message: "Rooms were clean and comfortable.",
      rating: 4
    },
    {
      id: 3,
      user: "Neha Kulkarni",
      message: "Food service can be improved.",
      rating: 3
    }
  ]);


  /* =========================
     CHART DATA
  ========================= */

  const bookingData = [
    { month: "Jan", bookings: 40 },
    { month: "Feb", bookings: 55 },
    { month: "Mar", bookings: 70 },
    { month: "Apr", bookings: 60 },
    { month: "May", bookings: 85 },
    { month: "Jun", bookings: 95 }
  ];


  const revenueData = [
    { month: "Jan", revenue: 50000 },
    { month: "Feb", revenue: 65000 },
    { month: "Mar", revenue: 72000 },
    { month: "Apr", revenue: 60000 },
    { month: "May", revenue: 85000 },
    { month: "Jun", revenue: 95000 }
  ];


  const roomData = [
    {
      name: "Available",
      value: rooms.filter(
        (room) => room.status === "Available"
      ).length
    },
    {
      name: "Occupied",
      value: rooms.filter(
        (room) => room.status === "Occupied"
      ).length
    },
    {
      name: "Maintenance",
      value: rooms.filter(
        (room) => room.status === "Maintenance"
      ).length
    }
  ];


  const COLORS = [
    "#168aad",
    "#f4a261",
    "#e76f51"
  ];


  /* =========================
     OPEN REGISTER FORM
  ========================= */

  const openRegisterForm = (selectedRole) => {

    setRole(selectedRole);

    setEditingEmployee(null);

    setName("");
    setUsername("");
    setEmail("");
    setMobile("");
    setPassword("");

    setShowForm(true);
  };


  /* =========================
     ADD / UPDATE EMPLOYEE
  ========================= */

  const addEmployee = (e) => {

    e.preventDefault();

    if (
      !name ||
      !username ||
      !email ||
      !mobile
    ) {
      alert("Please fill all required fields");
      return;
    }


    const employee = {

      id:
        editingEmployee
          ? editingEmployee.id
          : Date.now(),

      name,
      username,
      email,
      mobile,

      status: "Active"
    };


    /* UPDATE */

    if (editingEmployee) {

      if (role === "Manager") {

        setManagers(
          managers.map((manager) =>
            manager.id === editingEmployee.id
              ? employee
              : manager
          )
        );

      } else {

        setStaff(
          staff.map((member) =>
            member.id === editingEmployee.id
              ? employee
              : member
          )
        );
      }

      alert(`${role} updated successfully!`);

    }


    /* ADD */

    else {

      if (role === "Manager") {

        setManagers([
          ...managers,
          employee
        ]);

      } else {

        setStaff([
          ...staff,
          employee
        ]);
      }

      alert(`${role} registered successfully!`);
    }


    clearForm();
  };


  /* =========================
     CLEAR FORM
  ========================= */

  const clearForm = () => {

    setName("");
    setUsername("");
    setEmail("");
    setMobile("");
    setPassword("");

    setEditingEmployee(null);

    setShowForm(false);
  };


  /* =========================
     EDIT MANAGER
  ========================= */

  const editManager = (manager) => {

    setRole("Manager");

    setEditingEmployee(manager);

    setName(manager.name);
    setUsername(manager.username);
    setEmail(manager.email);
    setMobile(manager.mobile);

    setShowForm(true);
  };


  /* =========================
     DELETE MANAGER
  ========================= */

  const deleteManager = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this manager?"
      );

    if (!confirmDelete) return;

    setManagers(
      managers.filter(
        (manager) => manager.id !== id
      )
    );

    alert("Manager deleted successfully!");
  };


  /* =========================
     EDIT STAFF
  ========================= */

  const editStaff = (member) => {

    setRole("Staff");

    setEditingEmployee(member);

    setName(member.name);
    setUsername(member.username);
    setEmail(member.email);
    setMobile(member.mobile);

    setShowForm(true);
  };


  /* =========================
     DELETE STAFF
  ========================= */

  const deleteStaff = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this staff member?"
      );

    if (!confirmDelete) return;

    setStaff(
      staff.filter(
        (member) => member.id !== id
      )
    );

    alert("Staff deleted successfully!");
  };


  /* =========================
     CHANGE ROOM STATUS
  ========================= */

  const changeRoomStatus = (id, newStatus) => {

    setRooms(
      rooms.map((room) =>
        room.id === id
          ? {
              ...room,
              status: newStatus
            }
          : room
      )
    );
  };


  /* =========================
     BOOKING STATUS
  ========================= */

  const changeBookingStatus = (
    id,
    newStatus
  ) => {

    setBookings(
      bookings.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status: newStatus
            }
          : booking
      )
    );
  };


  /* =========================
     RESET PASSWORD
  ========================= */

  const handleResetPassword = (e) => {

    e.preventDefault();

    alert(
      "Password reset successfully!"
    );

    setShowResetPassword(false);
  };


  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {

    const confirmLogout =
      window.confirm(
        "Are you sure you want to logout?"
      );

    if (confirmLogout) {

      alert("Logged out successfully!");

      window.location.href = "/";
    }
  };


  /* =========================
     JSX
  ========================= */

  return (

    <div className="admin-page">


      {/* =========================
          HEADER
      ========================= */}

      <header className="admin-header">

        <div>

          <h2>Royal Haven</h2>

          <span>
            Admin Management Panel
          </span>

        </div>


        <div className="admin-user">

          👤 Admin

          <button
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </header>



      <div className="admin-layout">


        {/* =========================
            SIDEBAR
        ========================= */}

        <aside className="admin-sidebar">

          <h3>ADMIN PANEL</h3>


          <a href="#dashboard">
            📊 Dashboard
          </a>


          <a href="#managers">
            👨‍💼 Managers
          </a>


          <a href="#staff">
            👨‍🔧 Staff
          </a>


          <a href="#users">
            👥 Users
          </a>


          <a href="#rooms">
            🏨 Rooms
          </a>


          <a href="#bookings">
            📅 Bookings
          </a>


          <a href="#accounts">
            🔐 Accounts & Roles
          </a>


          <a href="#payments">
            💳 Payments
          </a>


          <a href="#feedback">
            ⭐ Feedback
          </a>

        </aside>



        {/* =========================
            MAIN CONTENT
        ========================= */}

        <main className="admin-content">


          {/* =========================
              DASHBOARD
          ========================= */}

          <section id="dashboard">

            <h1>
              Admin Dashboard
            </h1>

            <p className="dashboard-subtitle">
              Manage and monitor the complete
              resort management system.
            </p>



            {/* STATISTICS */}

            <div className="stats-grid">


              <div className="stat-card">

                <div className="stat-icon">
                  👥
                </div>

                <h2>
                  {users.length}
                </h2>

                <p>
                  Total Users
                </p>

              </div>


              <div className="stat-card">

                <div className="stat-icon">
                  👨‍💼
                </div>

                <h2>
                  {managers.length}
                </h2>

                <p>
                  Managers
                </p>

              </div>


              <div className="stat-card">

                <div className="stat-icon">
                  👨‍🔧
                </div>

                <h2>
                  {staff.length}
                </h2>

                <p>
                  Staff Members
                </p>

              </div>


              <div className="stat-card">

                <div className="stat-icon">
                  🏨
                </div>

                <h2>
                  {rooms.length}
                </h2>

                <p>
                  Total Rooms
                </p>

              </div>


              <div className="stat-card">

                <div className="stat-icon">
                  📅
                </div>

                <h2>
                  {bookings.length}
                </h2>

                <p>
                  Total Bookings
                </p>

              </div>


              <div className="stat-card">

                <div className="stat-icon">
                  💰
                </div>

                <h2>
                  ₹4.2L
                </h2>

                <p>
                  Total Revenue
                </p>

              </div>

            </div>



            {/* =========================
                GRAPHS
            ========================= */}

            <div className="charts-grid">


              {/* BOOKING GRAPH */}

              <div className="chart-card">

                <h3>
                  Booking Overview
                </h3>

                <ResponsiveContainer
                  width="100%"
                  height={280}
                >

                  <BarChart
                    data={bookingData}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                    />

                    <XAxis
                      dataKey="month"
                    />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                      dataKey="bookings"
                      fill="#168aad"
                      name="Bookings"
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>



              {/* ROOM CHART */}

              <div className="chart-card">

                <h3>
                  Room Status
                </h3>

                <ResponsiveContainer
                  width="100%"
                  height={280}
                >

                  <PieChart>

                    <Pie
                      data={roomData}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      dataKey="value"
                      label
                    >

                      {roomData.map(
                        (entry, index) => (

                          <Cell
                            key={index}
                            fill={
                              COLORS[index]
                            }
                          />

                        )
                      )}

                    </Pie>

                    <Tooltip />

                    <Legend />

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </div>



            {/* REVENUE */}

            <div className="chart-card revenue-chart">

              <h3>
                Revenue Overview
              </h3>

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <LineChart
                  data={revenueData}
                >

                  <CartesianGrid
                    strokeDasharray="3 3"
                  />

                  <XAxis
                    dataKey="month"
                  />

                  <YAxis />

                  <Tooltip />

                  <Legend />

                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#168aad"
                    strokeWidth={3}
                    name="Revenue"
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </section>



          {/* =========================
              MANAGERS
          ========================= */}

          <section
            id="managers"
            className="admin-section"
          >

            <div className="section-title">

              <div>

                <h2>
                  Manager Management
                </h2>

                <p>
                  Register and manage resort managers.
                </p>

              </div>


              <button
                className="primary-btn"
                onClick={() =>
                  openRegisterForm("Manager")
                }
              >
                + Register Manager
              </button>

            </div>



            <table>

              <thead>

                <tr>

                  <th>Name</th>
                  <th>Username</th>
                  <th>Status</th>
                  <th>Actions</th>

                </tr>

              </thead>


              <tbody>

                {managers.map(
                  (manager) => (

                    <tr key={manager.id}>

                      <td>
                        {manager.name}
                      </td>

                      <td>
                        {manager.username}
                      </td>

                      <td>

                        <span className="active-status">
                          {manager.status}
                        </span>

                      </td>

                      <td>

                        <button
                          className="edit-btn"
                          onClick={() =>
                            editManager(manager)
                          }
                        >
                          Edit
                        </button>


                        <button
                          className="delete-btn"
                          onClick={() =>
                            deleteManager(
                              manager.id
                            )
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </section>



          {/* =========================
              STAFF
          ========================= */}

          <section
            id="staff"
            className="admin-section"
          >

            <div className="section-title">

              <div>

                <h2>
                  Staff Management
                </h2>

                <p>
                  Register and manage resort staff.
                </p>

              </div>


              <button
                className="primary-btn"
                onClick={() =>
                  openRegisterForm("Staff")
                }
              >
                + Register Staff
              </button>

            </div>



            <table>

              <thead>

                <tr>

                  <th>Name</th>
                  <th>Username</th>
                  <th>Status</th>
                  <th>Actions</th>

                </tr>

              </thead>


              <tbody>

                {staff.map(
                  (member) => (

                    <tr key={member.id}>

                      <td>
                        {member.name}
                      </td>

                      <td>
                        {member.username}
                      </td>

                      <td>

                        <span className="active-status">
                          {member.status}
                        </span>

                      </td>

                      <td>

                        <button
                          className="edit-btn"
                          onClick={() =>
                            editStaff(member)
                          }
                        >
                          Edit
                        </button>


                        <button
                          className="delete-btn"
                          onClick={() =>
                            deleteStaff(
                              member.id
                            )
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </section>



          {/* =========================
              USERS
          ========================= */}

          <section
            id="users"
            className="admin-section"
          >

            <h2>
              User Management
            </h2>

            <p>
              Admin can view and manage all registered users.
            </p>


            <div className="management-box">

              <div>

                <h3>
                  {users.length} Registered Users
                </h3>

                <p>
                  View user details, bookings and account status.
                </p>

              </div>


              <button
                className="primary-btn"
                onClick={() =>
                  setShowUsers(true)
                }
              >
                View Users
              </button>

            </div>

          </section>



          {/* =========================
              ROOMS
          ========================= */}

          <section
            id="rooms"
            className="admin-section"
          >

            <h2>
              Room Management
            </h2>

            <p>
              Manage room availability and status.
            </p>


            <div className="room-stats">

              <div>

                <h3>
                  {
                    rooms.filter(
                      (room) =>
                        room.status ===
                        "Available"
                    ).length
                  }
                </h3>

                <p>
                  Available
                </p>

              </div>


              <div>

                <h3>
                  {
                    rooms.filter(
                      (room) =>
                        room.status ===
                        "Occupied"
                    ).length
                  }
                </h3>

                <p>
                  Occupied
                </p>

              </div>


              <div>

                <h3>
                  {
                    rooms.filter(
                      (room) =>
                        room.status ===
                        "Maintenance"
                    ).length
                  }
                </h3>

                <p>
                  Maintenance
                </p>

              </div>

            </div>


            <button
              className="primary-btn"
              onClick={() =>
                setShowRooms(true)
              }
            >
              Manage Rooms
            </button>

          </section>



          {/* =========================
              BOOKINGS
          ========================= */}

          <section
            id="bookings"
            className="admin-section"
          >

            <h2>
              Booking Management
            </h2>

            <p>
              Monitor and manage all resort bookings.
            </p>


            <div className="management-box">

              <div>

                <h3>
                  {bookings.length} Total Bookings
                </h3>

                <p>
                  Approve, update or cancel bookings.
                </p>

              </div>


              <button
                className="primary-btn"
                onClick={() =>
                  setShowBookings(true)
                }
              >
                View Bookings
              </button>

            </div>

          </section>



          {/* =========================
              ACCOUNTS
          ========================= */}

          <section
            id="accounts"
            className="admin-section"
          >

            <h2>
              Account & Role Management
            </h2>

            <p>
              Control login access and user roles.
            </p>


            <div className="role-grid">

              <div>

                <h3>
                  👑 Admin
                </h3>

                <p>
                  Complete system access
                </p>

              </div>


              <div>

                <h3>
                  👨‍💼 Manager
                </h3>

                <p>
                  Management access
                </p>

              </div>


              <div>

                <h3>
                  👨‍🔧 Staff
                </h3>

                <p>
                  Staff access
                </p>

              </div>


              <div>

                <h3>
                  👥 User
                </h3>

                <p>
                  Customer access
                </p>

              </div>

            </div>


            <button
              className="primary-btn"
              onClick={() =>
                setShowAccounts(true)
              }
            >
              Manage Accounts
            </button>


            <button
              className="secondary-btn"
              onClick={() =>
                setShowResetPassword(true)
              }
            >
              Reset Password
            </button>

          </section>



          {/* =========================
              PAYMENTS
          ========================= */}

          <section
            id="payments"
            className="admin-section"
          >

            <h2>
              Payment Management
            </h2>

            <p>
              Monitor resort payments and revenue.
            </p>


            <div className="room-stats">

              <div>

                <h3>
                  ₹4.2L
                </h3>

                <p>
                  Total Revenue
                </p>

              </div>


              <div>

                <h3>
                  ₹3.5L
                </h3>

                <p>
                  Paid
                </p>

              </div>


              <div>

                <h3>
                  ₹70K
                </h3>

                <p>
                  Pending
                </p>

              </div>

            </div>

          </section>



          {/* =========================
              FEEDBACK
          ========================= */}

          <section
            id="feedback"
            className="admin-section"
          >

            <h2>
              Feedback & Complaints
            </h2>

            <p>
              Review customer feedback and complaints.
            </p>


            <button
              className="primary-btn"
              onClick={() =>
                setShowFeedback(true)
              }
            >
              View Feedback
            </button>

          </section>


        </main>

      </div>



      {/* ==================================================
          REGISTER / EDIT MANAGER / STAFF POPUP
      ================================================== */}

      {showForm && (

        <div className="form-overlay">

          <div className="admin-form">

            <h2>

              {editingEmployee
                ? `Edit ${role}`
                : `Register ${role}`}

            </h2>


            <form
              onSubmit={addEmployee}
            >


              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />


              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  setUsername(
                    e.target.value
                  )
                }
              />


              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
              />


              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) =>
                  setMobile(
                    e.target.value
                  )
                }
              />


              {!editingEmployee && (

                <input
                  type="password"
                  placeholder="Temporary Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />

              )}


              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
              >

                <option value="Manager">
                  Manager
                </option>

                <option value="Staff">
                  Staff
                </option>

              </select>


              <div className="form-buttons">

                <button
                  type="submit"
                  className="primary-btn"
                >

                  {editingEmployee
                    ? "Update"
                    : "Register"}

                </button>


                <button
                  type="button"
                  className="cancel-btn"
                  onClick={clearForm}
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}



      {/* ==================================================
          USERS POPUP
      ================================================== */}

      {showUsers && (

        <div className="form-overlay">

          <div className="admin-form">

            <h2>
              Registered Users
            </h2>


            {users.map((user) => (

              <div
                key={user.id}
                style={{
                  padding: "12px",
                  borderBottom:
                    "1px solid #eee"
                }}
              >

                <strong>
                  {user.name}
                </strong>

                <br />

                <small>
                  {user.email}
                </small>

                <br />

                <span className="active-status">
                  {user.status}
                </span>

              </div>

            ))}


            <button
              className="cancel-btn"
              style={{
                marginTop: "20px"
              }}
              onClick={() =>
                setShowUsers(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}



      {/* ==================================================
          ROOM POPUP
      ================================================== */}

      {showRooms && (

        <div className="form-overlay">

          <div className="admin-form">

            <h2>
              Manage Rooms
            </h2>


            {rooms.map((room) => (

              <div
                key={room.id}
                style={{
                  padding: "12px 0",
                  borderBottom:
                    "1px solid #eee"
                }}
              >

                <strong>
                  Room {room.id}
                </strong>

                <p>
                  {room.type}
                </p>


                <select
                  value={room.status}
                  onChange={(e) =>
                    changeRoomStatus(
                      room.id,
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "8px"
                  }}
                >

                  <option>
                    Available
                  </option>

                  <option>
                    Occupied
                  </option>

                  <option>
                    Maintenance
                  </option>

                </select>

              </div>

            ))}


            <button
              className="cancel-btn"
              style={{
                marginTop: "20px"
              }}
              onClick={() =>
                setShowRooms(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}



      {/* ==================================================
          BOOKINGS POPUP
      ================================================== */}

      {showBookings && (

        <div className="form-overlay">

          <div
            className="admin-form"
            style={{
              width: "600px"
            }}
          >

            <h2>
              Booking Management
            </h2>


            {bookings.map(
              (booking) => (

                <div
                  key={booking.id}
                  style={{
                    padding: "15px 0",
                    borderBottom:
                      "1px solid #eee"
                  }}
                >

                  <strong>
                    {booking.id} -{" "}
                    {booking.user}
                  </strong>

                  <p>
                    Room: {booking.room}
                    <br />
                    Date: {booking.date}
                  </p>


                  <select
                    value={
                      booking.status
                    }
                    onChange={(e) =>
                      changeBookingStatus(
                        booking.id,
                        e.target.value
                      )
                    }
                    style={{
                      padding: "8px"
                    }}
                  >

                    <option>
                      Confirmed
                    </option>

                    <option>
                      Pending
                    </option>

                    <option>
                      Cancelled
                    </option>

                  </select>

                </div>

              )
            )}


            <button
              className="cancel-btn"
              style={{
                marginTop: "20px"
              }}
              onClick={() =>
                setShowBookings(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}



      {/* ==================================================
          ACCOUNTS POPUP
      ================================================== */}

      {showAccounts && (

        <div className="form-overlay">

          <div className="admin-form">

            <h2>
              Account & Role Management
            </h2>


            <div
              style={{
                padding: "15px",
                background:
                  "#f7f9fb",
                borderRadius: "8px",
                marginBottom: "10px"
              }}
            >

              <strong>
                👑 Admin
              </strong>

              <p>
                Complete system access
              </p>

            </div>


            <div
              style={{
                padding: "15px",
                background:
                  "#f7f9fb",
                borderRadius: "8px",
                marginBottom: "10px"
              }}
            >

              <strong>
                👨‍💼 Manager
              </strong>

              <p>
                Management access
              </p>

            </div>


            <div
              style={{
                padding: "15px",
                background:
                  "#f7f9fb",
                borderRadius: "8px",
                marginBottom: "10px"
              }}
            >

              <strong>
                👨‍🔧 Staff
              </strong>

              <p>
                Staff access
              </p>

            </div>


            <div
              style={{
                padding: "15px",
                background:
                  "#f7f9fb",
                borderRadius: "8px"
              }}
            >

              <strong>
                👥 User
              </strong>

              <p>
                Customer access
              </p>

            </div>


            <button
              className="cancel-btn"
              style={{
                marginTop: "20px"
              }}
              onClick={() =>
                setShowAccounts(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}



      {/* ==================================================
          RESET PASSWORD POPUP
      ================================================== */}

      {showResetPassword && (

        <div className="form-overlay">

          <div className="admin-form">

            <h2>
              Reset Password
            </h2>


            <form
              onSubmit={
                handleResetPassword
              }
            >

              <input
                type="text"
                placeholder="Username / Email"
                required
              />


              <input
                type="password"
                placeholder="New Password"
                required
              />


              <input
                type="password"
                placeholder="Confirm Password"
                required
              />


              <div className="form-buttons">

                <button
                  type="submit"
                  className="primary-btn"
                >
                  Reset Password
                </button>


                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() =>
                    setShowResetPassword(
                      false
                    )
                  }
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}



      {/* ==================================================
          FEEDBACK POPUP
      ================================================== */}

      {showFeedback && (

        <div className="form-overlay">

          <div
            className="admin-form"
            style={{
              width: "500px"
            }}
          >

            <h2>
              Feedback & Complaints
            </h2>


            {feedback.map(
              (item) => (

                <div
                  key={item.id}
                  style={{
                    padding: "15px",
                    borderBottom:
                      "1px solid #eee"
                  }}
                >

                  <strong>
                    {item.user}
                  </strong>

                  <p>
                    {item.message}
                  </p>

                  <span>
                    {"⭐".repeat(
                      item.rating
                    )}
                  </span>

                </div>

              )
            )}


            <button
              className="cancel-btn"
              style={{
                marginTop: "20px"
              }}
              onClick={() =>
                setShowFeedback(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}


export default AdminDashboard;