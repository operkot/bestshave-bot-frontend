import styled from 'styled-components'

import { Flex, Text } from 'ui/atoms'

const CheckboxInput = styled.input`
  appearance: none;

  position: relative;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  border-radius: 9999px;
  border: 1px solid ${props => props.theme.colors.primary[0]};

  background-color: ${props => props.theme.colors.primary[10]};

  &:after {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-top: -3px;
    margin-left: -3px;
    border-radius: 9999px;
    background-color: ${props => props.theme.colors.primary[10]};
  }

  &:checked {
    background-color: ${props => props.theme.colors.primary[0]};
  }
`

export const Checkbox = ({ label, name, value, ...props }) => (
  <Flex as="label" alignItems="center" {...props}>
    <CheckboxInput type="checkbox" name={name} value={value} />
    <Text>{label}</Text>
  </Flex>
)
