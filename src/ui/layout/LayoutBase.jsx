import { Box, Flex } from 'ui/atoms'
import { Header } from 'ui/organisms'

export const LayoutBase = ({ children, bg = '#fff' }) => (
  <Box as={Flex} flexDirection="column" minHeight="100vh" pt="68px" bg={bg}>
    <Header />

    <Box as="main">{children}</Box>
  </Box>
)
