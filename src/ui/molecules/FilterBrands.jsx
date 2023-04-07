import { Box, Flex, Text } from 'ui/atoms'
import { Checkbox } from 'ui/molecules'

const BRANDS = [
  { id: 'muhle', name: 'Muhle' },
  { id: 'trueffithill', name: 'Trueffit&Hill' },
  { id: 'tobs', name: 'Taylor Of Old Bond Street' },
  { id: 'proraso', name: 'Proraso' },
  { id: 'arko', name: 'Arko' },
]

export const FilterBrands = () => (
  <Box>
    <Text mb="0.5rem" fontWeight={600}>
      Производитель
    </Text>

    <Box as="ul">
      {BRANDS.map(brand => (
        <Checkbox
          key={brand.id}
          name="brand"
          label={brand.name}
          value={brand.id}
          mb={{ _: '0.75rem', last: 0 }}
        />
      ))}
    </Box>
  </Box>
)
