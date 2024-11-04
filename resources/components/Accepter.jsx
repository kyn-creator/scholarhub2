import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Accepter = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/PICTURES/logo.jpg" alt="Scholar Hub Logo" className="h-16" />
          </a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn btn-outline-primary" href="#">
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mt-3">
        <div className="row text-center">
          <a className="col" href="/ApplicantStatus">
            <button className="btn btn-success w-full">ACCEPTED</button>
          </a>
        </div>

        {/* Applicant cards */}
        <div className="container mt-5">
          {/* Applicant 1 */}
          <div className="card mb-4 p-3 shadow-sm">
            <div className="flex items-center">
              <img
                src="/PICTURES/images.jpg"
                alt="Profile Picture"
                className="rounded-full me-3 w-20 h-20"
              />
              <div>
                <h5>APPLICANT NUMBER 1</h5>
                <p><strong>NAME:</strong> John Doe</p>
                <p><strong>COURSE:</strong> BS-VAL</p>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sapien diam. Nam sit amet libero gravida, auctor ligula at, interdum nisl.
            </p>
          </div>

          {/* Applicant 2 */}
          <div className="card mb-4 p-3 shadow-sm">
            <div className="flex items-center">
              <img
                src="/PICTURES/images.jpg"
                alt="Profile Picture"
                className="rounded-full me-3 w-20 h-20"
              />
              <div>
                <h5>APPLICANT NUMBER 2</h5>
                <p><strong>NAME:</strong> Jane Doe</p>
                <p><strong>COURSE:</strong> BS-IT</p>
              </div>
            </div>
            <p className="mt-3">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accepter;
