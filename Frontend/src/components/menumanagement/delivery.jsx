import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Delivery.css'; // Import your CSS file

const Delivery = () => {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState([
    { name: 'Burger', price: 8.99, quantity: 0 },
    { name: 'Pizza', price: 10.99, quantity: 0 },
    { name: 'Fries', price: 3.99, quantity: 0 },
    // { name: 'Fries', price: 3.99, quantity: 0 },
  ]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleQuantityChange = (index, quantity) => {
    const updatedItems = [...orderItems];
    updatedItems[index].quantity = quantity;
    setOrderItems(updatedItems);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    orderItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Check if terms and conditions are accepted
    if (!isTermsAccepted) {
      alert('Please accept the terms and conditions.');
      return;
    }

    // Navigate to the next page or perform further actions
    navigate('/Tableconfirmation'); // Replace '/order-confirmation' with the desired path
  };

  return (
    <div className="food-delivery-container">
      <div className="header">
        <h1>Food Delivery</h1>
      </div>
      <div className="content">
        <div className="delivery-info">
          <h2>Delivery Address</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea id="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" required />
            </div>
            <div className="terms-conditions">
              <label>
                <input
                  type="checkbox"
                  checked={isTermsAccepted}
                  onChange={(e) => setIsTermsAccepted(e.target.checked)}
                />
                I accept the terms and conditions:
              </label>
              <p>
                By placing an order, you agree to the following terms and conditions:
              </p>
              <ol>
                <li>All orders must be paid in full at the time of delivery.</li>
                <li>Delivery may take up to 45 minutes depending on the location and traffic conditions.</li>
                <li>Any changes or cancellations to the order must be made at least 1 hour in advance.</li>
                <li>We are not responsible for any allergies or dietary restrictions. Please inform us of any special requests or concerns.</li>
                <li>Prices and availability of menu items are subject to change without notice.</li>
              </ol>
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      handleQuantityChange(index, item.quantity > 0 ? item.quantity - 1 : 0)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="total">
            <span>Total:</span>
            <span>${getTotalPrice()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
