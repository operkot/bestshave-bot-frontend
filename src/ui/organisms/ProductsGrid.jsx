import { Grid, Text } from 'ui/atoms'
import { ProductCard } from 'ui/organisms'

export const ProductsGrid = ({ products, ...props }) => {
  if (!products || !products.length) {
    return (
      <Text py="0.5rem" fontSize="1.125rem" fontWeight={400} textAlign="center">
        Товаров нет.
      </Text>
    )
  }

  return (
    <Grid
      gridTemplateColumns="repeat(auto-fill, minmax(160px, 1fr))"
      gap="8px"
      {...props}
    >
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  )
}
