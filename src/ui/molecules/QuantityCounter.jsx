import { useEffect, useState } from 'react'
import { Box, Flex, Text } from 'ui/atoms'

export const QuantityCounter = ({ qty = 1, onQtyChange, ...props }) => {
  const [quntity, setQuantity] = useState(qty)

  useEffect(() => {
    onQtyChange(quntity)
  }, [quntity])

  const increaseQty = () => setQuantity(prev => prev + 1)

  const decreaseQty = () => {
    if (quntity === 1) {
      return
    }

    setQuantity(prev => prev - 1)
  }

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      borderRadius="10px"
      px="10px"
      bg={props.bg ? props.bg : 'white'}
    >
      <Box
        as="button"
        h={props.size === 'small' ? '34px' : '44px'}
        px={props.size === 'small' ? '5px' : '10px'}
        fontSize="20px"
        fontWeight={600}
        lineHeight="1"
        color="primary.0"
        onClick={decreaseQty}
      >
        -
      </Box>
      <Box
        as="input"
        type="number"
        value={quntity}
        w={props.size === 'small' ? '24px' : '32px'}
        h="24px"
        textAlign="center"
        bg="transparent"
        readOnly
      />
      <Box
        as="button"
        h={props.size === 'small' ? '34px' : '44px'}
        px={props.size === 'small' ? '5px' : '10px'}
        fontSize="20px"
        fontWeight={600}
        lineHeight="1"
        color="primary.0"
        onClick={increaseQty}
      >
        +
      </Box>
    </Box>
  )
}
