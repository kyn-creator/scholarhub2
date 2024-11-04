// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePageLogin from './components/HomePageLogin';
import ApplicantStatus from './components/ApplicantStatus';
import Accepter from './components/Accepter';
import DeclinedStatus from './components/DeclinedStatus';
import ViewMore from './components/ViewMore';
import AboutUs from './components/aboutUs';

import '../css/app.css';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePageLogin />} />
                <Route path="/ApplicantStatus" element={<ApplicantStatus />} />
                <Route path="/Accepter" element={<Accepter />} />
                <Route path="/DeclinedStatus" element={<DeclinedStatus />} />
                <Route path="/ViewMore" element={<ViewMore />} />
                <Route path="/aboutUs" element={<AboutUs />} /> {/* Add the AboutUs route */}
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;

// Mount to root in blade file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);