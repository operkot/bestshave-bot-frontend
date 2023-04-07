import styled from 'styled-components'
import { compose, space, sizing } from '@xstyled/styled-components'

export const IconWrapper = styled.svg`
  flex-shrink: 0;
  fill: ${props => props.fill || 'currentColor'};

  ${compose(space, sizing)}
`

export const Icon = props => (
  <IconWrapper {...props}>
    <use xlinkHref={`img/sprite.svg#${props.name}`} />
  </IconWrapper>
)
