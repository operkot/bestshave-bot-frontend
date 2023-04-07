import { PRODUCTS_MOCK } from 'mocks/products'

import { Box, Button, Container, Flex, Icon, Panel, Text } from 'ui/atoms'
import { ProductsFilters, ProductsGrid, Search } from 'ui/organisms'
import { LayoutBase } from 'ui/layout/LayoutBase'

export const Catalog = () => {
  return (
    <LayoutBase bg="#f7f7f7">
      <Container as={Box} p="1rem 1rem 2rem">
        {/* CATALOG TOOLS */}
        <Panel
          mb="1.5rem"
          p="0.625rem"
          borderRadius="15px"
          bg="#f7f7f7"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Search />
          <ProductsFilters />
        </Panel>

        <ProductsGrid products={PRODUCTS_MOCK} mb="1rem" />

        <Button w="100%" px="1.5rem" py="1rem">
          Загрузить еще
        </Button>
      </Container>
    </LayoutBase>
  )
}
