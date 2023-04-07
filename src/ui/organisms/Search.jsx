import { Box, Flex, Icon } from 'ui/atoms'

export const Search = () => {
  return (
    <Box
      as={Flex}
      flexGrow={1}
      alignItems="center"
      p="6px"
      borderRadius="6px"
      bg="white"
    >
      {/* SEARCH ICON */}
      <Icon name="search" w="20px" h="20px" mr="8px" fill="#b8b8b8" />

      {/* SEARCH INPUT */}
      <Box
        as="input"
        name="search"
        placeholder="Поиск"
        style={{ flexGrow: 1 }}
        bg="transparent"
        outline="none"
      />
    </Box>
  )
}
