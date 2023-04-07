import { motion, AnimatePresence } from 'framer-motion'

import { Box, Portal } from 'ui/atoms'

export const Popup = ({ children, isOpen, onClose }) => (
  <AnimatePresence initial={false} mode="wait">
    {isOpen && (
      <Portal>
        {/* POPUP CONTAINER */}
        <Box
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          left={0}
          display="flex"
          p="16px"
          role="dialog"
          style={{ zIndex: 10 }}
        >
          {/* POPUP BACKDROP */}
          <Box
            role="button"
            tabIndex={0}
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            bg="rgba(0, 0, 0, 0.3)"
            cursor="pointer"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* POPUP CONTENT */}
          <Box
            as={motion.div}
            position="relative"
            zIndex={2}
            m="auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            {children}
          </Box>
        </Box>
      </Portal>
    )}
  </AnimatePresence>
)
