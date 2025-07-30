import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HallBookindTerms.css'; // Import the CSS file for styling

const HallBookingTerms = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    if (isChecked) {
      // Perform the hall booking submission logic here
      console.log('Hall booking submitted!');
      navigate('/Tableconfirmation'); // Navigate to the confirmation page
    } else {
      // Display an error message or prompt the user to accept the terms
      console.log('Please accept the terms and conditions.');
      // You can show an error message or perform any other action to notify the user
    }
  };

  return (
    <div className="hall-booking-terms">
      <h1 className="title">Hall Booking Terms and Conditions</h1>
      <p className="description">
        Please read the following terms and conditions carefully before booking the hall:
      </p>

      <h3 className="section-title">Reservation Policy</h3>
      <p>
        1. Hall bookings are subject to availability. We recommend making a reservation in advance to secure the hall.
      </p>
      <p>
        2. The hall reservation will be held for a maximum of 1 hour from the scheduled start time. After that, the reservation may be canceled if the hall is not occupied.
      </p>
      
      <h3 className="section-title">Payment Policy</h3>
      <p>
        1. A deposit of 50% of the total booking amount is required to confirm the reservation.
      </p>
      <p>
        2. The remaining balance must be paid at least 7 days before the event date.
      </p>

      <label className="accept-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="accept-text">I accept the terms and conditions</span>
      </label>

      <button className="submit-button" onClick={handleSubmit} disabled={!isChecked}>
        Submit
      </button>
    </div>
  );
};

export default HallBookingTerms;
