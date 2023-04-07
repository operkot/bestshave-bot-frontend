import { matchPath, useNavigate, useLocation } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { useTelegram } from './useTelegram'

export const useNavigationBtn = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { onClose } = useTelegram()

  const isHome = !!matchPath(
    { path: location.pathname, exact: true },
    PATHS.HOME
  )

  const onNavBtnClick = () => {
    if (isHome) {
      onClose()
      return
    }

    navigate(PATHS.HOME)
  }

  return { onNavBtnClick }
}
