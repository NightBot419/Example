import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Revenue.css';
import incomeData from '../data/income.json';

const Revenue = () => {
  const [timeframe, setTimeframe] = useState('monthly'); // 'daily', 'monthly', 'yearly'

  const getData = () => {
    switch (timeframe) {
      case 'daily':
        return incomeData.daily.map(item => ({ name: item.date, revenue: item.revenue }));
      case 'monthly':
        return incomeData.monthly.map(item => ({ name: item.month, revenue: item.revenue }));
      case 'yearly':
        return incomeData.yearly.map(item => ({ name: item.year, revenue: item.revenue }));
      default:
        return [];
    }
  };

  const data = getData();

  return (
    <div className="revenue-container">
      <h3>Doanh thu</h3>
      <div className="timeframe-selector">
        <button onClick={() => setTimeframe('daily')} className={timeframe === 'daily' ? 'active' : ''}>Ngày</button>
        <button onClick={() => setTimeframe('monthly')} className={timeframe === 'monthly' ? 'active' : ''}>Tháng</button>
        <button onClick={() => setTimeframe('yearly')} className={timeframe === 'yearly' ? 'active' : ''}>Năm</button>
      </div>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Revenue;
