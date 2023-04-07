export const getCartAmount = state =>
  state.cart.data.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)
