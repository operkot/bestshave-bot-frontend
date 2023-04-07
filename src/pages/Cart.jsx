import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { useCart } from 'hooks/useCart'
import { Box, Button, Container, Flex, Panel, Text } from 'ui/atoms'
import { CartItem } from 'ui/molecules'
import { LayoutBase } from 'ui/layout/LayoutBase'
import { formatProductPrice } from 'utils/currency'

export const Cart = () => {
  const { items, amount, total, removeItem, adjustItemQty } = useCart()

  if (amount === 0) {
    return (
      <LayoutBase>
        <Container as={Box} p="2rem">
          <Box
            as="img"
            src="img/empty_cart.webp"
            alt=""
            mx="auto"
            mb="1.5rem"
          />

          <Text mb="1" fontSize="18px" fontWeight={500} textAlign="center">
            Ваша корзина пуста!
          </Text>

          <Text mb="1.25rem" textAlign="center">
            Перйдите в каталог и выбирите себе что-нибудь :)
          </Text>

          <Link to={PATHS.HOME}>
            <Button as="span" w="100%">
              В каталог
            </Button>
          </Link>
        </Container>
      </LayoutBase>
    )
  }

  return (
    <LayoutBase>
      <Container as={Box} p="1rem">
        <Text
          as="h1"
          mb="1rem"
          fontSize="18px"
          fontWeight={500}
          color="#0d3567"
        >
          Ваш заказ
        </Text>

        <Panel mb="1.5rem" p="10px" borderRadius="15px">
          {items.map(order => (
            <CartItem
              key={order.id}
              {...order}
              onRemoveItem={removeItem}
              onQtyAdjust={adjustItemQty}
            />
          ))}
        </Panel>

        <Box p="1.25rem" borderRadius="15px" bg="primary.10">
          <Flex justifyContent="space-between">
            <Text fontWeight={500}>Итого:</Text>
            <Text fontWeight={700} color="primary.0">
              {formatProductPrice(total)}
            </Text>
          </Flex>
        </Box>
      </Container>
    </LayoutBase>
  )
}
