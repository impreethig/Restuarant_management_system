import React, { useState } from 'react';
import './ReservationForm.css';
import { useNavigate } from 'react-router-dom';

function ReservationForm() {
  const navigate = useNavigate();

  const [bookingName, setBookingName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validate booking name
    if (bookingName.trim() === '') {
      validationErrors.bookingName = 'Booking Name is required';
    }

    // Validate date
    if (date.trim() === '') {
      validationErrors.date = 'Date is required';
    }

    // Validate time
    if (time.trim() === '') {
      validationErrors.time = 'Time is required';
    }

    // Validate party size
    if (partySize.trim() === '') {
      validationErrors.partySize = 'Party Size is required';
    } else if (parseInt(partySize, 10) <= 0) {
      validationErrors.partySize = 'Party Size must be greater than 0';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Perform form submission logic here
      navigate('/tables');
    }
  };
  return (
    <div className="App">
      <h1>Table Reservation Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="booking-name">Booking Name:</label>
          <input
            type="text"
            id="booking-name"
            value={bookingName}
            onChange={(e) => setBookingName(e.target.value)}
            required
          />
          {errors.bookingName && <span className="error">{errors.bookingName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="party-size">Party Size:</label>
          <input
            type="number"
            id="party-size"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            min="1"
            required
          />
          {errors.partySize && <span className="error">{errors.partySize}</span>}
        </div>
        <div className="form-group">
          {/* <nav> */}
            {/* <Link to="/tables"> */}
              <input type="submit" value="Submit" />
            {/* </Link> */}
          {/* </nav> */}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
