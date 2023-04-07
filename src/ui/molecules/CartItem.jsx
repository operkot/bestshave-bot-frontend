import { formatProductPrice } from 'utils/currency'
import { Box, Flex, Icon, Text } from 'ui/atoms'
import { QuantityCounter } from 'ui/molecules'

export const CartItem = ({ onRemoveItem, onQtyAdjust, ...props }) => {
  return (
    <Box as={Flex} alignItems="center" mb={{ _: '1.25rem', last: '0px' }}>
      {/* THUMB */}
      <Box
        position="relative"
        w="50px"
        h="50px"
        mr="0.75rem"
        flexShrink={0}
        borderRadius="15px"
        overflow="hidden"
      >
        <Box
          as="img"
          src={props.thumb}
          alt={props.title}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>

      {/* INFO */}
      <Box mr="0.75rem" flexGrow={1}>
        <Text mb="0.25rem" fontSize="13px" lineHeight="1.2">
          {props.title}
        </Text>
        <Text fontSize="14px" fontWeight={500} color="primary.0">
          {formatProductPrice(props.price)}
        </Text>
      </Box>

      {/* QUANTITY */}
      <QuantityCounter
        bg="primary.10"
        size="small"
        ml="auto"
        onQtyChange={qty => onQtyAdjust(props.id, qty)}
        qty={props.quantity}
      />

      {/* REMOVE */}
      <Box
        as="button"
        w="20px"
        h="20px"
        ml="0.75rem"
        flexShrink={0}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          fontSize="22px"
          fontWeight={700}
          lineHeight="1"
          color="primary.0"
          onClick={() => onRemoveItem(props.id)}
        >
          &times;
        </Text>
      </Box>
    </Box>
  )
}
