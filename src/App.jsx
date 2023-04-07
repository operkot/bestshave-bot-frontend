import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { useTelegram } from 'hooks/useTelegram'
import router from 'routing/router'

const App = () => {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return <RouterProvider router={router} />
}

export default App
