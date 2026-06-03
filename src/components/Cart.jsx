import React from "react";

function Cart({ cart, increment, decrement, clearCart, removeCart }) {
  return (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <h2>Shopping Cart {cart?.length}</h2>
      {cart.length > 0 && (
        <button style={{ marginBottom: "18px" }} onClick={clearCart}>
          ClearCart
        </button>
      )}
      {cart.length > 0 ? (
        <div>
          {cart.map((c, i) => (
            <div style={{ display: "flex", gap: "30px" }} key={i}>
              <button
                style={{ height: "25px", marginTop: "10px" }}
                onClick={() => decrement(c.id)}
              >
                -
              </button>
              <button
                style={{ height: "25px", marginTop: "10px" }}
                onClick={() => increment(c.id)}
              >
                +
              </button>

              <p>
                {c.name} - ₹{c.price} × {c.quantity}
              </p>
              <button
                onClick={() => removeCart(c.id)}
                style={{ height: "25px", marginTop: "10px" }}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is currently empty.</p>
      )}
    </div>
  );
}
export default Cart;
