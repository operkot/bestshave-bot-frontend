import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart, removeFromCart, adjustQty } from 'store/slices/cart'

export const useCart = () => {
  const items = useSelector(state => state.cart.data)
  const total = useSelector(state =>
    state.cart.data.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    )
  )
  const amount = useSelector(state =>
    state.cart.data.reduce((acc, item) => (acc += item.quantity), 0)
  )
  const dispatch = useDispatch()

  const addItem = item => dispatch(addToCart(item))

  const removeItem = id => dispatch(removeFromCart(id))

  const adjustItemQty = (id, qty) => dispatch(adjustQty({ id, qty }))

  return { items, addItem, removeItem, total, amount, adjustItemQty }
}
