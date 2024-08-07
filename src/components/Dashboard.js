
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-dark sidebar">
          <div className="sidebar-sticky">
            <h5 className="text-white">Dashboard</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">To-Do List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Commission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Task Management</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Policies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Sales Pipeline</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Calendar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Settings</a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ml-sm-auto col-lg-10 main-content">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Total Customers</h5>
                  <p className="card-text">1000</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">New Customers</h5>
                  <p className="card-text">100</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Return Customers</h5>
                  <p className="card-text">20</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Inactive Customers</h5>
                  <p className="card-text">2</p>
                </div>
              </div>
            </div>
          </div>

          
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

