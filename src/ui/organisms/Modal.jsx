import { motion, AnimatePresence } from 'framer-motion'

import { Box, Flex, Portal } from 'ui/atoms'

export const Modal = ({ children, isOpen, onClose }) => (
  <AnimatePresence initial={false} mode="wait">
    {isOpen && (
      <Portal>
        {/* MODAL WRAPPER */}
        <Box
          as={Flex}
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={10}
          role="dialog"
        >
          {/* MODAL BACKDROP */}
          <Box
            as={motion.div}
            role="button"
            tabIndex={0}
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            bg="rgba(0, 0, 0, 0.3)"
            cursor="pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* POPUP CONTENT */}
          <Box
            as={motion.div}
            position="relative"
            mt="auto"
            w="100%"
            style={{ zIndex: 2 }}
            initial={{ transform: 'translateY(100%)' }}
            animate={{
              transform: 'translateY(0)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            exit={{
              transform: 'translateY(100%)',
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
