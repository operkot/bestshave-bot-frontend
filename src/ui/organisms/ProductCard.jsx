import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { formatProductPrice } from 'utils/currency'
import { Box, Flex, Text } from 'ui/atoms'

export const ProductCard = props => {
  return (
    <Box
      as={Flex}
      position="relative"
      flexDirection="column"
      borderRadius="15px"
      bg="white"
      overflow="hidden"
    >
      {/* CARD LINK */}
      <Box
        as={Link}
        to={PATHS.PRODUCT}
        state={{ product: props }}
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        style={{ zIndex: 2 }}
      />

      {/* CARD THUMB */}
      <Box position="relative" pt="100%">
        <Box
          as="img"
          src={props?.images[0]}
          alt={props?.title}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          maxHeight="100%"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>

      <Box p="0.75rem">
        {/* CARD TITLE */}
        <Text
          mb={{ _: '0.5rem', last: 0 }}
          fontSize="0.875rem"
          lineHeight="1.2"
          textOverflow="ellipsis"
          whiteSpace="normal"
          wordWrap="break-word"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {props?.title}
        </Text>

        {/* CARD PRICE */}
        <Text
          fontSize="0.75rem"
          fontWeight={600}
          lineHeight="1.2"
          color="primary.0"
        >
          {formatProductPrice(props?.price)}
        </Text>
      </Box>
    </Box>
  )
}
