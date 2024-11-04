import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const DeclinedStatus = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/PICTURES/logo.jpg" alt="Scholar Hub Logo" style={{ height: '70px' }} />
          </a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn btn-outline-primary" href="#">Account</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Declined Button */}
      <div className="container mt-3">
        <div className="row text-center">
          <div className="col">
            <a href="/ApplicantStatus">
              <button className="btn btn-danger w-100">DECLINED</button>
            </a>
          </div>
        </div>
      </div>

      {/* Applicant Cards */}
      <div className="container mt-5">
        {/* Applicant 1 */}
        <div className="card mb-4 p-3 shadow-sm">
          <div className="d-flex align-items-center">
            <img
              src="/PICTURES/images.jpg"
              alt="Profile Picture"
              className="rounded-circle me-3"
              style={{ width: '80px', height: '80px' }}
            />
            <div>
              <h5>APPLICANT NUMBER 1</h5>
              <p><strong>NAME:</strong> John Doe</p>
              <p><strong>COURSE:</strong> BS-VAL</p>
              <p><strong>REMARKS: __________</strong></p>
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et sapien diam. Nam sit amet libero gravida, auctor ligula at, interdum nisl.
          </p>
        </div>

        {/* Applicant 2 */}
        <div className="card mb-4 p-3 shadow-sm">
          <div className="d-flex align-items-center">
            <img
              src="/PICTURES/images.jpg"
              alt="Profile Picture"
              className="rounded-circle me-3"
              style={{ width: '80px', height: '80px' }}
            />
            <div>
              <h5>APPLICANT NUMBER 2</h5>
              <p><strong>NAME:</strong> Jane Doe</p>
              <p><strong>COURSE:</strong> BS-IT</p>
              <p><strong>REMARKS: __________</strong></p>
            </div>
          </div>
          <p className="mt-3">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeclinedStatus;
