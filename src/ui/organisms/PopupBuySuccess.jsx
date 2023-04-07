import { Link } from 'react-router-dom'

import { PATHS } from 'routing/paths'
import { Box, Button, Grid, Panel, Text } from 'ui/atoms'
import { Popup } from 'ui/organisms'

export const PopupBuySuccess = ({ product, isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <Panel borderRadius="15px">
        <Box borderRadius="15px" p="1rem" bg="white">
          <Text mb="1rem" fontSize="18px" fontWeight={500} textAlign="center">
            Товар {product} добавлен в корзину!
          </Text>

          <Grid gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap="1rem">
            <Button w="100%" onClick={onClose}>
              Хорошо
            </Button>
            <Link to={PATHS.CART}>
              <Button w="100%">В корзину</Button>
            </Link>
          </Grid>
        </Box>
      </Panel>
    </Popup>
  )
}
