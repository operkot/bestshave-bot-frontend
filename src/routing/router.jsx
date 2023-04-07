import { createBrowserRouter } from 'react-router-dom'

import { PATHS } from './paths'
import { Cart, Catalog, Product } from 'pages'

export default createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Catalog />,
  },
  {
    path: PATHS.CART,
    element: <Cart />,
  },
  {
    path: PATHS.PRODUCT,
    element: <Product />,
  },
])
