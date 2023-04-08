import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Box, Panel, Portal } from 'ui/atoms'

export const Toast = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [isOpen])

  return (
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <Portal>
          <Box
            position="fixed"
            top={0}
            right={0}
            left={0}
            zIndex={8}
            p="0.5rem"
          >
            <Panel
              as={motion.div}
              initial={{ transform: 'translateX(100%)' }}
              animate={{
                transform: 'translateX(0)',
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              exit={{
                transform: 'translateX(100%)',
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              <Box
                borderRadius="15px"
                p="1rem"
                bg="primary.10"
                onClick={onClose}
              >
                {children}
              </Box>
            </Panel>
          </Box>
        </Portal>
      )}
    </AnimatePresence>
  )
}
