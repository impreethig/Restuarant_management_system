// BookingForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './BookingForm.css';

const BookingForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validate name
    if (name.trim() === '') {
      validationErrors.name = 'Name is required';
    }

    // Validate email
    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
    }

    // Validate date
    if (date.trim() === '') {
      validationErrors.date = 'Date is required';
    }

    // Validate guests
    if (guests.trim() === '') {
      validationErrors.guests = 'Number of guests is required';
    } else if (parseInt(guests, 10) <= 0) {
      validationErrors.guests = 'Number of guests must be greater than 0';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission logic here
      console.log('Form submitted:', { name, email, date, guests });
      // Clear form inputs and errors
      setName('');
      setEmail('');
      setDate('');
      setGuests('');
      setErrors({});

      // Navigate to the next page
      navigate('/hallBooking'); // Replace '/next-page' with the desired path
    }
  };
  return (
    <div className="booking-form-container">
      <h2>Party Hall Booking</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        {errors.date && <span className="error">{errors.date}</span>}

        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
        {errors.guests && <span className="error">{errors.guests}</span>}
        
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
