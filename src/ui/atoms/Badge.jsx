import styled from 'styled-components'
import {
  backgrounds,
  color,
  layout,
  sizing,
  space,
  typography,
} from '@xstyled/styled-components'

export const Badge = styled.div(
  backgrounds,
  color,
  layout,
  sizing,
  space,
  typography
)

Badge.defaultProps = {
  bg: 'primary.0',
  color: 'white',
  px: '0.5rem',
  py: '0.25rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
}
