import styled, { css } from 'styled-components'
import {
  compose,
  effects,
  color,
  borders,
  layout,
  space,
  sizing,
  typography,
} from '@xstyled/styled-components'

const ButtonVariants = ({ theme, variant }) =>
  ({
    default: css`
      background-color: ${theme.colors.primary[0]};
      color: ${theme.colors.white};
    `,
  }[variant])

export const Button = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition: all 0.3s ease;
  appearance: none;

  ${compose(color, borders, layout, space, sizing, typography, effects)}
  ${ButtonVariants}

  &:active {
    transform: scale(0.98);
  }

  &[disabled] {
    cursor: not-allowed;
  }
`

Button.defaultProps = {
  variant: 'default',
  minWidth: '132px',
  px: '2rem',
  py: '1rem',
  borderRadius: '10px',
  fontFamily: 'roboto',
  fontSize: '1rem',
  lineHeight: 1,
  letterSpacing: '0.02em',
  textAlign: 'center',
}
