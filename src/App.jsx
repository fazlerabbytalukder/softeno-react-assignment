import { useState } from "react";
import ProductPage from "./components/ProductPage";
import CartModal from "./components/CartModal";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <ProductPage onAddToCart={addToCart} />
      {isModalOpen && (
        <CartModal cartItems={cartItems} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
