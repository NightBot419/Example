import React from 'react';
import Orders from '../components/Orders';
import Revenue from '../components/Revenue';
import TopSellingDrinks from '../components/TopSellingDrinks';
import TopCustomers from '../components/TopCustomers';

const DashboardHome = () => {
  return (
    <div className="dashboard-home-grid">
      <Orders />
      <Revenue />
      <TopSellingDrinks />
      <TopCustomers />
    </div>
  );
};

export default DashboardHome;
