import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Box } from 'ui/atoms'

export const Collapse = ({ i, activeId, onClick, title = '', children }) => {
  const isOpen = useMemo(() => {
    return i === activeId
  }, [activeId])

  return (
    <Box>
      {/* TRIGGER */}
      <Box
        as="button"
        w="100%"
        py="0.5rem"
        borderBottomWidth="1px"
        borderStyle="solid"
        borderColor="#666"
        fontSize="1.125rem"
        fontWeight={600}
        textAlign="initial"
        onClick={() => onClick(isOpen ? false : i)}
      >
        {title}
      </Box>

      {/* PANEL */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <Box
            as={motion.div}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            overflow="hidden"
          >
            <Box py="1rem">{children}</Box>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  )
}
