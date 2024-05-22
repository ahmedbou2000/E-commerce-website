// src/pages/Dashboard/DashboardStats.jsx
import React from 'react';
import s from './DashboardStats.module.scss';

const DashboardStats = () => {
  return (
    <div className={s.dashboardStats}>
      <h2>Statistics</h2>
      <div className={s.stats}>
        <div className={s.statItem}>
          <h3>Total Sales</h3>
          <p>$10,000</p>
        </div>
        <div className={s.statItem}>
          <h3>New Customers</h3>
          <p>150</p>
        </div>
        <div className={s.statItem}>
          <h3>Orders</h3>
          <p>200</p>
        </div>
        <div className={s.statItem}>
          <h3>Monthly Sales</h3>
          <p>$2,500</p>
        </div>
        <div className={s.statItem}>
          <h3>Today's Orders</h3>
          <p>30</p>
        </div>
        <div className={s.statItem}>
          <h3>Last Month's Orders</h3>
          <p>180</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
