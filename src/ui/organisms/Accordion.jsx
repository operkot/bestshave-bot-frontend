import React, { useState } from 'react'

import { Box } from 'ui/atoms'
import { Collapse } from 'ui/molecules'

export const Accordion = ({ children }) => {
  const [expanded, setExpanded] = useState(0)

  return (
    <Box>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...child.props,
          activeId: expanded,
          onClick: setExpanded,
        })
      })}
    </Box>
  )
}

Accordion.Unit = Collapse
