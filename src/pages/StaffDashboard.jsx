import React, { useState } from "react";
import "./StaffDashboard.css";

function StaffDashboard() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Clean Room",
      room: "101",
      date: "Today",
      status: "Pending"
    },
    {
      id: 2,
      task: "Prepare Room",
      room: "205",
      date: "Today",
      status: "In Progress"
    },
    {
      id: 3,
      task: "Guest Request",
      room: "302",
      date: "Today",
      status: "Completed"
    }
  ]);

  const [requests, setRequests] = useState([
    {
      id: 1,
      room: "101",
      request: "Extra Towels",
      status: "Pending"
    },
    {
      id: 2,
      room: "205",
      request: "Room Cleaning",
      status: "In Progress"
    },
    {
      id: 3,
      room: "302",
      request: "Water Bottle",
      status: "Completed"
    }
  ]);

  const updateTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: "Completed" }
          : task
      )
    );
  };

  const updateRequest = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id
          ? { ...request, status: "Completed" }
          : request
      )
    );
  };

  return (
    <div className="staff-dashboard">

      {/* Header */}
      <div className="staff-header">
        <div>
          <h1>Staff Dashboard</h1>
          <p>Welcome back, Staff 👋</p>
        </div>

        <button className="logout-btn">
          Logout
        </button>
      </div>

      {/* Summary Cards */}
      <div className="staff-cards">

        <div className="staff-card">
          <div className="card-icon">📋</div>
          <div>
            <h3>Assigned Tasks</h3>
            <h2>{tasks.length}</h2>
          </div>
        </div>

        <div className="staff-card">
          <div className="card-icon">🛎️</div>
          <div>
            <h3>Today's Check-ins</h3>
            <h2>3</h2>
          </div>
        </div>

        <div className="staff-card">
          <div className="card-icon">🚪</div>
          <div>
            <h3>Today's Check-outs</h3>
            <h2>2</h2>
          </div>
        </div>

        <div className="staff-card">
          <div className="card-icon">🔔</div>
          <div>
            <h3>Service Requests</h3>
            <h2>{requests.length}</h2>
          </div>
        </div>

      </div>

      {/* Assigned Tasks */}
      <div className="dashboard-section">

        <div className="section-title">
          <h2>📋 Assigned Tasks</h2>
          <p>Tasks assigned by Admin / Manager</p>
        </div>

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Task</th>
                <th>Room</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {tasks.map((task) => (

                <tr key={task.id}>

                  <td>{task.task}</td>

                  <td>{task.room}</td>

                  <td>{task.date}</td>

                  <td>
                    <span className={`status ${task.status
                      .toLowerCase()
                      .replace(" ", "-")}`}>
                      {task.status}
                    </span>
                  </td>

                  <td>

                    {task.status !== "Completed" ? (

                      <button
                        className="complete-btn"
                        onClick={() => updateTask(task.id)}
                      >
                        Complete
                      </button>

                    ) : (
                      <span className="done-text">
                        ✓ Done
                      </span>
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Check-in and Check-out */}
      <div className="two-sections">

        {/* Check-ins */}
        <div className="small-section">

          <h2>🛎️ Today's Check-ins</h2>

          <div className="guest-item">
            <div>
              <strong>Rahul Patil</strong>
              <p>Room 101 • 12:00 PM</p>
            </div>

            <span className="pending">
              Pending
            </span>
          </div>

          <div className="guest-item">
            <div>
              <strong>Priya Sharma</strong>
              <p>Room 205 • 2:00 PM</p>
            </div>

            <span className="completed">
              Checked-in
            </span>
          </div>

          <div className="guest-item">
            <div>
              <strong>Amit Shah</strong>
              <p>Room 302 • 4:00 PM</p>
            </div>

            <span className="pending">
              Pending
            </span>
          </div>

        </div>

        {/* Check-outs */}
        <div className="small-section">

          <h2>🚪 Today's Check-outs</h2>

          <div className="guest-item">
            <div>
              <strong>Neha Joshi</strong>
              <p>Room 102 • 10:00 AM</p>
            </div>

            <span className="completed">
              Completed
            </span>
          </div>

          <div className="guest-item">
            <div>
              <strong>Akash More</strong>
              <p>Room 203 • 11:00 AM</p>
            </div>

            <span className="pending">
              Pending
            </span>
          </div>

        </div>

      </div>

      {/* Service Requests */}
      <div className="dashboard-section">

        <div className="section-title">
          <h2>🔔 Service Requests</h2>
          <p>Guest requests that need staff attention</p>
        </div>

        <div className="request-grid">

          {requests.map((request) => (

            <div className="request-card" key={request.id}>

              <div className="request-top">
                <h3>{request.request}</h3>

                <span className={`status ${request.status
                  .toLowerCase()
                  .replace(" ", "-")}`}>
                  {request.status}
                </span>
              </div>

              <p>Room: {request.room}</p>

              {request.status !== "Completed" && (

                <button
                  className="complete-btn"
                  onClick={() => updateRequest(request.id)}
                >
                  Mark as Completed
                </button>

              )}

            </div>

          ))}

        </div>

      </div>

      {/* Staff Profile */}
      <div className="profile-section">

        <h2>👤 My Profile</h2>

        <div className="profile-details">

          <div>
            <label>Name</label>
            <p>Staff Member</p>
          </div>

          <div>
            <label>Username</label>
            <p>staff01</p>
          </div>

          <div>
            <label>Email</label>
            <p>staff@gmail.com</p>
          </div>

          <div>
            <label>Mobile</label>
            <p>9876543210</p>
          </div>

          <div>
            <label>Department</label>
            <p>Housekeeping</p>
          </div>

          <div>
            <label>Role</label>
            <p>Staff</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default StaffDashboard;