import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { useCart } from 'hooks/useCart'
import { Box, Flex, Icon, Text } from 'ui/atoms'

export const CartIndicator = () => {
  const { amount } = useCart()

  return (
    <Link to={PATHS.CART}>
      <Box position="relative" w="28px" h="28px">
        {amount > 0 && (
          <Box
            as={Flex}
            alignItems="center"
            justifyContent="center"
            position="absolute"
            top={0}
            right={0}
            minWidth="18px"
            h="18px"
            mt="-4px"
            mr="-4px"
            borderRadius="9999px"
            bg="primary.0"
          >
            <Text fontSize="12px" lineHeight="14px" color="white">
              {amount}
            </Text>
          </Box>
        )}

        <Icon name="cart" w="28px" h="28px" fill="#000" />
      </Box>
    </Link>
  )
}
