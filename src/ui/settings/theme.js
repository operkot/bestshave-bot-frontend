import { defaultTheme } from '@xstyled/styled-components'

const breakpoints = ['375px', '768px', '992px', '1200px', '1440px']

const theme = {
  ...defaultTheme,
  screens: {
    _: 0,
    xs: breakpoints[0],
    sm: breakpoints[1],
    md: breakpoints[2],
    lg: breakpoints[3],
    xl: breakpoints[4],
  },
  mq: {
    xs: `(min-width: ${breakpoints[0]})`,
    sm: `(min-width: ${breakpoints[1]})`,
    md: `(min-width: ${breakpoints[2]})`,
    lg: `(min-width: ${breakpoints[3]})`,
    xl: `(min-width: ${breakpoints[4]})`,
  },
  fonts: {
    montserrat: 'Montserrat, sans-serif',
    roboto: 'Roboto, sans-serif',
  },
  colors: {
    black: '#000',
    white: '#fff',
    primary: {
      0: '#40a7e3',
      // 0: '#6876fd',
      10: '#f1f8fc',
      20: '#0d3567',
    },
    gray: {
      0: '#2e3538',
      10: '#aeaeae',
      20: '#fbfbfb',
    },
  },
  states: {
    ...defaultTheme.states,
    evenchild: '&:nth-child(even)',
    oddchild: '&:nth-child(even)',
  },
}

export default theme
