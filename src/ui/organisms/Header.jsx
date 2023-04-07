import { useNavigate } from 'react-router-dom'

import { useNavigationBtn } from 'hooks/useNavigationBtn'
import { Box, Container, Flex, Icon } from 'ui/atoms'
import { CartIndicator } from 'ui/molecules'

export const Header = () => {
  const { onNavBtnClick } = useNavigationBtn()

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={5}
      py="10px"
      bg="white"
      boxShadow="5px 5px 35px -14px rgba(0, 0, 0, 0.17)"
    >
      <Container
        as={Flex}
        alignItems="center"
        justifyContent="space-between"
        px="1rem"
      >
        <Box as="button" onClick={onNavBtnClick}>
          <Icon name="chevron-back" w="24px" h="24px" fill="#000" />
        </Box>

        <Box as="img" src="img/moustache.png" alt="" w="48px" h="48px" />

        <CartIndicator />
      </Container>
    </Box>
  )
}
