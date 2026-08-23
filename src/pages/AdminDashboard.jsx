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

  const [showForm, setShowForm] = useState(false);
  const [role, setRole] = useState("Manager");

  const [managers, setManagers] = useState([
    {
      name: "Amit Sharma",
      username: "amit",
      status: "Active"
    }
  ]);

  const [staff, setStaff] = useState([
    {
      name: "Rahul Patil",
      username: "rahul",
      status: "Active"
    },
    {
      name: "Sneha Joshi",
      username: "sneha",
      status: "Active"
    }
  ]);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  // Booking data
  const bookingData = [
    { month: "Jan", bookings: 40 },
    { month: "Feb", bookings: 55 },
    { month: "Mar", bookings: 70 },
    { month: "Apr", bookings: 60 },
    { month: "May", bookings: 85 },
    { month: "Jun", bookings: 95 }
  ];

  // Revenue data
  const revenueData = [
    { month: "Jan", revenue: 50000 },
    { month: "Feb", revenue: 65000 },
    { month: "Mar", revenue: 72000 },
    { month: "Apr", revenue: 60000 },
    { month: "May", revenue: 85000 },
    { month: "Jun", revenue: 95000 }
  ];

  // Room data
  const roomData = [
    { name: "Available", value: 25 },
    { name: "Occupied", value: 12 },
    { name: "Maintenance", value: 3 }
  ];

  const COLORS = ["#168aad", "#f4a261", "#e76f51"];

  const addEmployee = (e) => {

    e.preventDefault();

    if (!name || !username) {
      alert("Please fill all fields");
      return;
    }

    const employee = {
      name: name,
      username: username,
      status: "Active"
    };

    if (role === "Manager") {
      setManagers([...managers, employee]);
    } else {
      setStaff([...staff, employee]);
    }

    setName("");
    setUsername("");
    setShowForm(false);
  };

  return (

    <div className="admin-page">

      {/* TOP NAVBAR */}

      <header className="admin-header">

        <div>
          <h2>Royal Haven</h2>
          <span>Admin Management Panel</span>
        </div>

        <div className="admin-user">
          👤 Admin
          <button>Logout</button>
        </div>

      </header>


      <div className="admin-layout">

        {/* SIDEBAR */}

        <aside className="admin-sidebar">

          <h3>ADMIN PANEL</h3>

          <a href="#dashboard">📊 Dashboard</a>

          <a href="#managers">👨‍💼 Managers</a>

          <a href="#staff">👨‍🔧 Staff</a>

          <a href="#users">👥 Users</a>

          <a href="#rooms">🏨 Rooms</a>

          <a href="#bookings">📅 Bookings</a>

          <a href="#accounts">🔐 Accounts & Roles</a>

          <a href="#payments">💳 Payments</a>

          <a href="#feedback">⭐ Feedback</a>

        </aside>


        {/* MAIN CONTENT */}

        <main className="admin-content">

          {/* DASHBOARD */}

          <section id="dashboard">

            <h1>Admin Dashboard</h1>

            <p className="dashboard-subtitle">
              Manage and monitor the complete resort management system.
            </p>


            {/* STATISTICS */}

            <div className="stats-grid">

              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <h2>120</h2>
                <p>Total Users</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">👨‍💼</div>
                <h2>{managers.length}</h2>
                <p>Managers</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">👨‍🔧</div>
                <h2>{staff.length}</h2>
                <p>Staff Members</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">🏨</div>
                <h2>40</h2>
                <p>Total Rooms</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <h2>85</h2>
                <p>Total Bookings</p>
              </div>

              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <h2>₹4.2L</h2>
                <p>Total Revenue</p>
              </div>

            </div>


            {/* GRAPHS */}

            <div className="charts-grid">

              {/* BOOKING GRAPH */}

              <div className="chart-card">

                <h3>Booking Overview</h3>

                <ResponsiveContainer width="100%" height={280}>

                  <BarChart data={bookingData}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

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


              {/* ROOM PIE CHART */}

              <div className="chart-card">

                <h3>Room Status</h3>

                <ResponsiveContainer width="100%" height={280}>

                  <PieChart>

                    <Pie
                      data={roomData}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      dataKey="value"
                      label
                    >

                      {roomData.map((entry, index) => (

                        <Cell
                          key={index}
                          fill={COLORS[index]}
                        />

                      ))}

                    </Pie>

                    <Tooltip />

                    <Legend />

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </div>


            {/* REVENUE GRAPH */}

            <div className="chart-card revenue-chart">

              <h3>Revenue Overview</h3>

              <ResponsiveContainer width="100%" height={300}>

                <LineChart data={revenueData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="month" />

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


          {/* MANAGER MANAGEMENT */}

          <section id="managers" className="admin-section">

            <div className="section-title">

              <div>
                <h2>Manager Management</h2>
                <p>Register and manage resort managers.</p>
              </div>

              <button
                className="primary-btn"
                onClick={() => {
                  setRole("Manager");
                  setShowForm(true);
                }}
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

                {managers.map((manager, index) => (

                  <tr key={index}>

                    <td>{manager.name}</td>

                    <td>{manager.username}</td>

                    <td>
                      <span className="active-status">
                        Active
                      </span>
                    </td>

                    <td>

                      <button className="edit-btn">
                        Edit
                      </button>

                      <button className="delete-btn">
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </section>


          {/* STAFF MANAGEMENT */}

          <section id="staff" className="admin-section">

            <div className="section-title">

              <div>
                <h2>Staff Management</h2>
                <p>Register and manage resort staff.</p>
              </div>

              <button
                className="primary-btn"
                onClick={() => {
                  setRole("Staff");
                  setShowForm(true);
                }}
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

                {staff.map((member, index) => (

                  <tr key={index}>

                    <td>{member.name}</td>

                    <td>{member.username}</td>

                    <td>
                      <span className="active-status">
                        Active
                      </span>
                    </td>

                    <td>

                      <button className="edit-btn">
                        Edit
                      </button>

                      <button className="delete-btn">
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </section>


          {/* USER MANAGEMENT */}

          <section id="users" className="admin-section">

            <h2>User Management</h2>

            <p>
              Admin can view and manage all registered users.
            </p>

            <div className="management-box">

              <div>
                <h3>120 Registered Users</h3>
                <p>
                  View user details, bookings and account status.
                </p>
              </div>

              <button className="primary-btn">
                View Users
              </button>

            </div>

          </section>


          {/* ROOM MANAGEMENT */}

          <section id="rooms" className="admin-section">

            <h2>Room Management</h2>

            <p>
              Manage room availability and status.
            </p>

            <div className="room-stats">

              <div>
                <h3>25</h3>
                <p>Available</p>
              </div>

              <div>
                <h3>12</h3>
                <p>Occupied</p>
              </div>

              <div>
                <h3>3</h3>
                <p>Maintenance</p>
              </div>

            </div>

            <button className="primary-btn">
              Manage Rooms
            </button>

          </section>


          {/* BOOKINGS */}

          <section id="bookings" className="admin-section">

            <h2>Booking Management</h2>

            <p>
              Monitor and manage all resort bookings.
            </p>

            <div className="management-box">

              <div>
                <h3>85 Total Bookings</h3>

                <p>
                  Approve, update or cancel bookings.
                </p>

              </div>

              <button className="primary-btn">
                View Bookings
              </button>

            </div>

          </section>


          {/* ACCOUNTS */}

          <section id="accounts" className="admin-section">

            <h2>Account & Role Management</h2>

            <p>
              Control login access and user roles.
            </p>

            <div className="role-grid">

              <div>
                <h3>👑 Admin</h3>
                <p>Complete system access</p>
              </div>

              <div>
                <h3>👨‍💼 Manager</h3>
                <p>Management access</p>
              </div>

              <div>
                <h3>👨‍🔧 Staff</h3>
                <p>Staff access</p>
              </div>

              <div>
                <h3>👥 User</h3>
                <p>Customer access</p>
              </div>

            </div>

            <button className="primary-btn">
              Manage Accounts
            </button>

            <button className="secondary-btn">
              Reset Password
            </button>

          </section>


          {/* PAYMENTS */}

          <section id="payments" className="admin-section">

            <h2>Payment Management</h2>

            <p>
              Monitor resort payments and revenue.
            </p>

            <div className="room-stats">

              <div>
                <h3>₹4.2L</h3>
                <p>Total Revenue</p>
              </div>

              <div>
                <h3>₹3.5L</h3>
                <p>Paid</p>
              </div>

              <div>
                <h3>₹70K</h3>
                <p>Pending</p>
              </div>

            </div>

          </section>


          {/* FEEDBACK */}

          <section id="feedback" className="admin-section">

            <h2>Feedback & Complaints</h2>

            <p>
              Review customer feedback and complaints.
            </p>

            <button className="primary-btn">
              View Feedback
            </button>

          </section>

        </main>

      </div>


      {/* REGISTER MANAGER / STAFF POPUP */}

      {showForm && (

        <div className="form-overlay">

          <div className="admin-form">

            <h2>Register {role}</h2>

            <form onSubmit={addEmployee}>

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
              />

              <input
                type="text"
                placeholder="Mobile Number"
              />

              <input
                type="password"
                placeholder="Temporary Password"
              />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
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
                  Register
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminDashboard;