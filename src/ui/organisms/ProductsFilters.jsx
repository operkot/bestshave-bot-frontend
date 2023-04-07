import { useModalState } from 'hooks/useModalState'
import { Box, Button, Flex, Icon, Text } from 'ui/atoms'
import { FilterBrands, FilterCategories, FilterPrice } from 'ui/molecules'
import { Modal } from 'ui/organisms'

export const ProductsFilters = () => {
  const {
    isOpen: isFiltersModalOpen,
    onOpen: onFiltersModalOpen,
    onClose: onFiltersModalClose,
  } = useModalState()

  return (
    <Box>
      {/* FILTERS TRIGGER */}
      <Box as="button" p="6px" ml="10px" onClick={onFiltersModalOpen}>
        <Icon name="filter" w="24px" h="24px" fill="#000" />
      </Box>

      <Modal isOpen={isFiltersModalOpen} onClose={onFiltersModalClose}>
        <Box
          as={Flex}
          flexDirection="column"
          w="100%"
          h="80vh"
          maxHeight="95vh"
          p="1rem"
          borderRadius="16px 16px 0px 0px"
          bg="white"
        >
          {/* FILTERS HEADER */}
          <Flex
            as="header"
            alignItems="center"
            justifyContent="space-between"
            mb="1rem"
          >
            <Text fontSize="1.125rem" fontWeight="700">
              Фильтры
            </Text>

            <Box as="button" p="6px" onClick={onFiltersModalClose}>
              <Icon name="close" w="24px" h="24px" fill="#000" />
            </Box>
          </Flex>

          {/* FILTERS CONTENT */}
          <Box
            as={Flex}
            flexDirection="column"
            flexGrow={1}
            height="100%"
            overflow="auto"
            mb="1rem"
          >
            <FilterPrice mb="1rem" />
            <FilterCategories mb="1rem" />
            <FilterBrands />
          </Box>

          {/* FILTERS ACCEPT */}
          <Button w="100%" px="1.5rem" py="1rem">
            Прменить фильтр
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}
