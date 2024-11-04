import React, { useState } from 'react';

const ViewMore = () => {
    const [currentApplicant, setCurrentApplicant] = useState(null);
    const [showDeclineModal, setShowDeclineModal] = useState(false);
    const [showAcceptModal, setShowAcceptModal] = useState(false);
    const [declineRemarks, setDeclineRemarks] = useState('');
    const [accepted, setAccepted] = useState(false);
    const [declined, setDeclined] = useState(false);

    const applicant = {
        id: 1,
        name: 'John Doe',
        course: 'BS-VAL',
        dob: 'January 1, 1990',
        email: 'johndoe@example.com',
        phone: '+123 456 7890',
        address: '123 Main Street, City, Country',
        education: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        scholarship: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };

    const confirmAccept = () => {
        setAccepted(true);
        setShowAcceptModal(false);
    };

    const openAcceptModal = (applicant) => {
        setCurrentApplicant(applicant);
        setShowAcceptModal(true);
    };

    const openDeclineModal = (applicant) => {
        setCurrentApplicant(applicant);
        setShowDeclineModal(true);
    };

    const handleDecline = () => {
        if (currentApplicant) {
            setDeclined(true);
            setShowDeclineModal(false);
            setDeclineRemarks('');
        }
    };

    return (
        <div className="font-sans">
            {/* Navbar */}
            <nav className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <a href="/">
                        <img src="/PICTURES/logo.jpg" alt="Scholar Hub Logo" className="h-16" />
                    </a>
                    <div>
                        <a className="btn btn-outline-primary" href="#">Account</a>
                    </div>
                </div>
            </nav>

            {/* Status Buttons */}
            <div className="container mx-auto mt-4 text-center">
                <div className="flex justify-between">
                    <a href="/Accepter" className="w-full mx-2">
                        <button className="bg-green-600 text-white py-2 rounded-lg w-full">ACCEPTED</button>
                    </a>
                    <a href="/DeclinedStatus" className="w-full mx-2">
                        <button className="bg-red-600 text-white py-2 rounded-lg w-full">DECLINED</button>
                    </a>
                    <button className="bg-yellow-400 text-white py-2 rounded-lg w-full">PENDING</button>

                </div>
            </div>


            {/* Detailed Applicant Card */}
            <div className="container mx-auto mt-5">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img src="/PICTURES/images.jpg" alt="Profile" className="rounded-full w-24 h-24 mr-4" />
                            <div>
                                <h4 className="text-xl font-semibold">{`APPLICANT NUMBER ${applicant.id}`}</h4>
                                <p><strong>NAME:</strong> {applicant.name}</p>
                                <p><strong>COURSE:</strong> {applicant.course}</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-green-600 text-white py-2 px-4 rounded-lg mr-2" onClick={() => openAcceptModal(applicant)}>
                                ACCEPT
                            </button>
                            <button className="bg-red-600 text-white py-2 px-4 rounded-lg" onClick={() => openDeclineModal(applicant)}>
                                DECLINE
                            </button>
                        </div>
                    </div>

                    {/* Personal Information Section */}
                    <div className="mt-4">
                        <h5 className="text-lg font-bold">Personal Information</h5>
                        <p><strong>Date of Birth:</strong> {applicant.dob}</p>
                        <p><strong>Email:</strong> {applicant.email}</p>
                        <p><strong>Phone:</strong> {applicant.phone}</p>
                        <p><strong>Address:</strong> {applicant.address}</p>
                    </div>

                    {/* Education Section */}
                    <div className="mt-4">
                        <h5 className="text-lg font-bold">Educational Background</h5>
                        <p>{applicant.education}</p>
                    </div>

                    {/* Scholarship Information Section */}
                    <div className="mt-4">
                        <h5 className="text-lg font-bold">Scholarship Information</h5>
                        <p>{applicant.scholarship}</p>
                    </div>

                    {/* Additional Information Section */}
                    <div className="mt-4">
                        <h5 className="text-lg font-bold">Additional Information</h5>
                        <p>{applicant.additionalInfo}</p>
                    </div>
                </div>
            </div>

            {/* Modal for Declining Applicants */}
            {showDeclineModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h5 className="font-bold">Confirm Decline</h5>
                            <button type="button" className="text-gray-500" onClick={() => setShowDeclineModal(false)}>
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            <p>Please provide a reason for declining {currentApplicant?.name}:</p>
                            <textarea
                                className="mt-2 p-2 border rounded w-full"
                                value={declineRemarks}
                                onChange={(e) => setDeclineRemarks(e.target.value)}
                                rows="3"
                            />
                        </div>
                        <div className="flex justify-end p-4 border-t">
                            <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2" onClick={() => setShowDeclineModal(false)}>Cancel</button>
                            <button type="button" className="bg-red-600 text-white py-2 px-4 rounded-lg" onClick={handleDecline}>Decline</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Accepting Applicants */}
            {showAcceptModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h5 className="font-bold">Confirm Acceptance</h5>
                            <button type="button" className="text-gray-500" onClick={() => setShowAcceptModal(false)}>
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            <p>Are you sure you want to accept {currentApplicant?.name}?</p>
                        </div>
                        <div className="flex justify-end p-4 border-t">
                            <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2" onClick={() => setShowAcceptModal(false)}>Cancel</button>
                            <button type="button" className="bg-green-600 text-white py-2 px-4 rounded-lg" onClick={confirmAccept}>Accept</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Acceptance Confirmation Message */}
            {accepted && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/3 p-4 text-center">
                        <h5 className="font-bold">Success!</h5>
                        <p>You have accepted {currentApplicant?.name}.</p>
                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg mt-2" onClick={() => setAccepted(false)}>Close</button>
                    </div>
                </div>
            )}

            {/* Decline Confirmation Message */}
            {declined && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/3 p-4 text-center">
                        <h5 className="font-bold">Declined!</h5>
                        <p>You have declined {currentApplicant?.name}.</p>
                        <p>Remarks: {declineRemarks || 'No remarks provided'}</p>
                        <button className="bg-red-600 text-white py-2 px-4 rounded-lg mt-2" onClick={() => setDeclined(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewMore;
