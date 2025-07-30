import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TableReservered.css';

const TableReserved = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [order, setOrder] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTableNumberChange = (e) => {
    setTableNumber(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Navigate to another page
    navigate('/tableterms'); // Replace '/confirmation' with the desired path
  };

  return (
    <div className="container">
      <h1>Food Order Table Reservation</h1>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tableNumber">Table Number:</label>
          <input
            type="text"
            id="tableNumber"
            value={tableNumber}
            onChange={handleTableNumberChange}
            placeholder="Enter table number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="order">Order:</label>
          <textarea
            id="order"
            value={order}
            onChange={handleOrderChange}
            placeholder="Enter your food order"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TableReserved;
