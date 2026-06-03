const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exist = state.find((item) => item.id === action.payload.id);
      if (exist) {
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, quantity: x.quantity + 1 } : x,
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR":
      return [];

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case "DECREMENT":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
  }
};

export default cartReducer;
