import { Box, Icon, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri'

interface NavSeactionProps {
    title: string
    children: React.ReactNode
}

export default function NavSection({title, children}: NavSeactionProps) {
  return (
    <Box>
    <Text fontWeight="bold" color="gray.400" fontSize="small">
     {title}
    </Text>
    <Stack spacing="4" mt={8} align="stretch">
      {children}
    </Stack>
  </Box>
  )
}
