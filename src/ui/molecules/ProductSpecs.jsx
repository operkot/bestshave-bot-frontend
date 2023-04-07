import { Box, Text } from 'ui/atoms'

export const ProductSpecs = ({ specs = [] }) => {
  if (!specs.length) {
    return null
  }

  return (
    <Box>
      <Text
        as="h2"
        mb="1rem"
        fontSize="18px"
        fontWeight={500}
        lineHeight="1.25"
        color="primary.20"
      >
        Характеристики
      </Text>

      <Box as="table" w="100%">
        <tbody>
          {specs.map(s => (
            <Box as="tr" key={s.name} bg={{ evenchild: 'primary.10' }}>
              <Text as="td" p="0.5rem 0.75rem" fontSize="0.875rem">
                {s.name}
              </Text>
              <Text
                as="td"
                p="0.5rem 0.75rem"
                fontSize="0.875rem"
                textAlign="right"
              >
                {s.value}
              </Text>
            </Box>
          ))}
        </tbody>
      </Box>
    </Box>
  )
}
