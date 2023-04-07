import { useState } from 'react'

import { Box, Flex, Text } from 'ui/atoms'

const CATEGORIES = [
  { id: 'safety_razor', name: 'Т-образные станки' },
  { id: 'shving_brush', name: 'Помазки' },
  { id: 'blades', name: 'Лезвия' },
  { id: 'preshave', name: 'Средства до бритья(прешейв)' },
  { id: 'shaving', name: 'Средства для бритья' },
  { id: 'aftershave', name: 'Средства после бритья' },
  { id: 'accessories', name: 'Аксессуары' },
]

export const FilterCategories = ({ ...props }) => {
  const [selected, setSelected] = useState([])

  const onFilterBtnClick = id => {
    if (selected.includes(id)) {
      setSelected(prev => prev.filter(i => i !== id))
    } else {
      setSelected(prev => [...prev, id])
    }
  }

  return (
    <Box {...props}>
      <Text mb="0.5rem" fontWeight={600}>
        Категории
      </Text>

      <Box overflow="hidden">
        <Flex flexWrap="wrap" mr="-8px" mb="-8px">
          {CATEGORIES.map(cat => (
            <Box
              key={cat.id}
              position="relative"
              display="block"
              as="button"
              mr="8px"
              mb="8px"
              p="0.75rem 1rem"
              borderRadius="10px"
              bg={selected.includes(cat.id) ? 'primary.0' : 'primary.10'}
              color={selected.includes(cat.id) ? 'white' : 'gray.0'}
              style={{ flexGrow: 1 }}
              onClick={onFilterBtnClick.bind(null, cat.id)}
            >
              <Text
                fontSize="0.875rem"
                textAlign="center"
                style={{ position: 'relative', zIndex: 1 }}
              >
                {cat.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
