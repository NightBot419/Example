import React, { useState } from 'react';
import './Orders.css';
import ordersData from '../data/orders_details.json';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(ordersData[0]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="orders-container">
      <h3>Các đơn hàng</h3>
      <div className="orders-content">
        <div className="order-list">
          {ordersData.map((order) => (
            <div
              key={order.id}
              className={`order-item ${selectedOrder && selectedOrder.id === order.id ? 'active' : ''}`}
              onClick={() => handleOrderClick(order)}
            >
              {order.id}
            </div>
          ))}
          <div className="order-item">Tổng: {ordersData.length}</div>
        </div>
        <div className="order-details">
          <h4>Mã đơn: {selectedOrder ? selectedOrder.id : 'N/A'}</h4>
          {selectedOrder &&
            selectedOrder.items.map((item, index) => (
              <div className="detail-item" key={index}>
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price * item.quantity} VNĐ</span>
              </div>
            ))}
          <div className="total">
            <span>Tổng:</span>
            <span>{selectedOrder ? selectedOrder.total : 0} VNĐ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

