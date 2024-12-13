import React from "react";

const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-1/2 relative">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              Color: {item.color}, Quantity: {item.quantity}, Size: {item.size}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartModal;
