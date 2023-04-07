import { Box, Grid, Text } from 'ui/atoms'

export const FilterPrice = props => {
  return (
    <Grid
      gridTemplateColumns="repeat(2, minmax(0, 1fr))"
      gap="0.5rem 1rem"
      {...props}
    >
      <Text fontWeight={600} style={{ gridColumn: '1 / -1' }}>
        Цена
      </Text>
      <Box
        as="input"
        name="price_from"
        placeholder="От"
        p="10px"
        borderRadius="6px"
        bg="primary.10"
        outline="none"
      />
      <Box
        as="input"
        name="price_to"
        placeholder="До"
        p="10px"
        borderRadius="6px"
        bg="primary.10"
        outline="none"
      />
    </Grid>
  )
}
