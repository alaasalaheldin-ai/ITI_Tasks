import { useState } from "react";
import Child from "../components/Child.jsx";

const initialItems = [
  { id: 1, name: "Burger", price: 120, qty: 3 },
  { id: 2, name: "Fries", price: 60, qty: 2 },
  { id: 3, name: "Water", price: 20, qty: 5 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);

  const increaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const resetItems = () => {
    setItems(initialItems);
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5">Menu page</h1>

      {items.length === 0 ? (
        <p className="text-center text-info fw-bold fs-5">No item to show</p>
      ) : (
        <div>
          {items.map((item) => (
            <Child
              key={item.id}
              item={item}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              onDelete={deleteItem}
            />
          ))}
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h3 className="m-0">Total price ${totalPrice}</h3>
        <button className="btn btn-secondary" onClick={resetItems}>
          Reset
        </button>
      </div>
    </div>
  );
}