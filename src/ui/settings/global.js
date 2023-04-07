import { createGlobalStyle } from '@xstyled/styled-components'

import { fonts } from './fonts'
import { preflight } from './preflight'

export const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${preflight}

  body {
    font-family: ${props => props.theme.fonts.roboto};
    /* background-color: #f7f7f7; */
    color: ${props => props.theme.colors.gray[0]};
  }
`
