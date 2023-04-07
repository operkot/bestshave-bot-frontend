import { matchPath, useNavigate, useLocation } from 'react-router-dom'

import { PATHS } from 'routing/paths'

export const useNavigationBtn = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = !!matchPath(
    { path: location.pathname, exact: true },
    PATHS.HOME
  )

  const onNavBtnClick = () => {
    if (isHome) {
      console.log('THIS IS HOMEPAGE')
      return
    }

    navigate(PATHS.HOME)
  }

  return { onNavBtnClick }
}
