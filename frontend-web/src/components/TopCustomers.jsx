import React from 'react';
import './TopCustomers.css';
import clientData from '../data/client.json';

const TopCustomers = () => {
  const top10Customers = clientData.sort((a, b) => b.totalPurchases - a.totalPurchases).slice(0, 10);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <div className="top-customers-container">
      <h3>Top 10 khách hàng mua nhiều nhất</h3>
      <div className="customers-list">
        {top10Customers.map((customer) => (
          <div className="customer-item" key={customer.id}>
            <span>{customer.name}</span>
            <span>{formatCurrency(customer.totalPurchases)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCustomers;
