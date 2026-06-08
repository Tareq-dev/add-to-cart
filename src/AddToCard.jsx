import React, { useReducer } from "react";
import Cart from "./components/Cart";
import products from "./data/product";
import cartReducer from "./reducers/cartReducer";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      {/* PRODUCTS */}
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} width="100" />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>

            <button onClick={() => dispatch({ type: "ADD", payload: product })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <Cart
        cart={cart}
        increment={(id) => dispatch({ type: "INCREMENT", payload: id })}
        decrement={(id) => dispatch({ type: "DECREMENT", payload: id })}
        removeCart={(id) => dispatch({ type: "REMOVE", payload: id })}
        clearCart={() => dispatch({ type: "CLEAR" })}
      />
    </div>
  );
}

export default App;
