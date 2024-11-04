import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/home_styles.css'; 
import axios from 'axios'; // Ensure you import axios

const HomePageLogin = () => {
    const [scholarships, setScholarships] = useState([]); // State to hold scholarships

    const toggleStatus = (e) => {
        const statusContainer = e.target.parentElement;
        const statusText = statusContainer.querySelector('.scholarship-status');

        if (statusText.textContent.trim() === 'Active') {
            statusText.textContent = 'Deactivated';
            statusContainer.classList.remove('status-container');
            statusContainer.classList.add('status-containerdeact');
        } else {
            statusText.textContent = 'Active';
            statusContainer.classList.remove('status-containerdeact');
            statusContainer.classList.add('status-container');
        }
    };

    // Fetch scholarships from API
    useEffect(() => {
        const fetchScholarships = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/scholarships');
                setScholarships(response.data); // Store the fetched data in state
            } catch (error) {
                console.error('Error fetching scholarships:', error);
            }
        };

        fetchScholarships(); // Call the function to fetch scholarships
    }, []); // Empty dependency array means this will run once when the component mounts

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/PICTURES/logo.jpg" alt="Scholar Hub Logo" />
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

            {/* Page Content */}
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1>Scholarships offered</h1>
                    <div>
                        <button
                            className="btn btn-success me-2"
                            onClick={() => window.location.href = '/add-scholarship'}>
                            Add Scholarship
                        </button>
                        <button
                            className="btn btn-danger me-2"
                            onClick={() => window.location.href = '/delete-scholarship'}>
                            Delete Scholarship
                        </button>

                        <div className="btn-group">
                            <button
                                className="btn btn-outline-secondary dropdown-toggle"
                                type="button"
                                id="statusDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                All Statuses
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="statusDropdown">
                                <li><a className="dropdown-item" href="#">All</a></li>
                                <li><a className="dropdown-item" href="#">Active</a></li>
                                <li><a className="dropdown-item" href="#">Deactivated</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {scholarships.length === 0 ? (
                        <div className="col-12 text-center">
                            <p>There are no scholarships available.</p>
                        </div>
                    ) : (
                        scholarships.map(scholarship => (
                            <div className="col-md-4" key={scholarship.scholarship_id}>
                                <div className="scholarship-card">
                                    <div className={`status-container d-flex align-items-center ${scholarship.scholarship_status === 'active' ? 'status-container' : 'status-containerdeact'}`}>
                                        <button className="status-btn" onClick={toggleStatus}></button>
                                        <div className="scholarship-status ms-0">{scholarship.scholarship_status === 'active' ? 'Active' : 'Deactivated'}</div>
                                    </div>
                                    <a href="/ApplicantStatus">
                                        <div className="title mt-2">{scholarship.title || 'LORUM IPSUM'}</div>
                                        <p>{scholarship.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis eros purus, vitae ornare massa pellentesque id...'}</p>
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                
            </div>
        </div>
    );
};

export default HomePageLogin;
