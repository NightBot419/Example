import React from 'react';
import './TopSellingDrinks.css';
import menuData from '../data/menu.json';

const TopSellingDrinks = () => {
  const allItems = menuData.flatMap(category => category.items);
  const top10Selling = allItems.sort((a, b) => b.sold - a.sold).slice(0, 10);

  return (
    <div className="top-selling-drinks-container">
      <h3>Top 10 đồ uống bán chạy nhất</h3>
      <div className="drinks-list">
        {top10Selling.map((item, index) => (
          <div className="drink-item" key={item.id}>
            <span>{item.name}</span>
            <span>{item.sold} cốc</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingDrinks;
