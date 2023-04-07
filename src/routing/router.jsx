import { createBrowserRouter, createHashRouter } from 'react-router-dom'

import { PATHS } from './paths'
import { Cart, Catalog, Product } from 'pages'

export default createHashRouter([
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
