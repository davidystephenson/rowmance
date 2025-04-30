import { ChakraProvider } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'


export default function App () {
  return (
    <ChakraProvider>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Dorothy Parker</Td>
            <Td>dorothy@parker.com</Td>
          </Tr>
        </Tbody>
      </Table>
    </ChakraProvider>
  )
}
