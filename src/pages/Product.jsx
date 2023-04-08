import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { formatProductPrice } from 'utils/currency'
import { useCart } from 'hooks/useCart'
import { useModalState } from 'hooks/useModalState'
import { Box, Button, Container, Flex, Text } from 'ui/atoms'
import { ProductSpecs, QuantityCounter } from 'ui/molecules'
import { ProductGallery, PopupBuySuccess, Toast } from 'ui/organisms'
import { LayoutBase } from 'ui/layout/LayoutBase'

export const Product = () => {
  const [quantity, setQuantity] = useState(1)
  const { state } = useLocation()
  const { addItem } = useCart()
  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useModalState()

  const addToCartHandler = async () => {
    const data = {
      id: state?.product?.id,
      title: state?.product?.title,
      price: state?.product?.price,
      thumb: state?.product?.images[0],
      quantity: Number(quantity),
    }

    try {
      await addItem(data)
      onModalSuccessOpen()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LayoutBase>
      <Container as={Box} pb="100px" bg="white">
        {/* PRODUCT GALLERY */}
        <ProductGallery images={state?.product?.images} />

        {/* PRODUCT BODY */}
        <Box pt="2rem" px="1rem">
          <Flex
            alignItems="flex-start"
            justifyContent="space-between"
            mb="1.5rem"
          >
            {/* PRODUCT TITLE */}
            <Text
              as="h1"
              mr="2rem"
              fontSize="22px"
              fontWeight={500}
              lineHeight="1.25"
              color="primary.20"
            >
              {state?.product?.title}
            </Text>

            {/* PRODUCT PRICE */}
            <Box position="relative" flexShrink={0}>
              <Box
                position="absolute"
                top="50%"
                left="50%"
                w="50px"
                h="50px"
                mt="-25px"
                ml="-25px"
                borderRadius="9999px"
                bg="primary.10"
              />

              <Text
                fontFamily="montserrat"
                fontSize="22px"
                fontWeight="700"
                color="primary.0"
                style={{ position: 'relative', zIndex: 1 }}
              >
                {formatProductPrice(state?.product?.price)}
              </Text>
            </Box>
          </Flex>

          {/* PRODUCT INFO */}
          <Text
            mb={{ _: '2rem', last: 0 }}
            fontFamily="roboto"
            fontSize="16px"
            dangerouslySetInnerHTML={{ __html: state?.product?.caption }}
          />

          <ProductSpecs specs={state?.product?.specs} />
        </Box>

        {/* PRODUCT OPTIONS */}
        <Box
          position="fixed"
          right={0}
          bottom={0}
          left={0}
          zIndex={5}
          p="8px"
          bg="white"
        >
          <Box
            as={Flex}
            alignItems="center"
            justifyContent="space-between"
            p="10px"
            borderRadius="15px"
            bg="primary.10"
          >
            <QuantityCounter quantity={quantity} onQtyChange={setQuantity} />

            <Button px="1.5rem" py="0.875rem" onClick={addToCartHandler}>
              Купить
            </Button>
          </Box>
        </Box>
      </Container>

      {/* <PopupBuySuccess
        product={state?.product?.title}
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      /> */}

      <Toast isOpen={isModalSuccessOpen} onClose={onModalSuccessClose}>
        <Text lineHeight="1.2">
          Товар{' '}
          <Text as="span" fontWeight={700}>
            "{state?.product?.title}"
          </Text>{' '}
          добавлен в корзину!
        </Text>
      </Toast>
    </LayoutBase>
  )
}
