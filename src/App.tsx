import { ChakraProvider, Td } from '@chakra-ui/react'
import VirtualTable from './Virtual'

function TestCells(props: { row: { name: string, email: string } }) {
  return (
    <>
      <Td>{props.row.name}</Td>
      <Td>{props.row.email}</Td>
    </>
  )
}

function generateRows(count: number) {
  const rows = Array.from({ length: count }, (_, i) => {
    return {
      name: `Item ${i + 1}`,
      email: `Email ${i + 1}`
    }
  })
  return rows
}


export default function App() {
  const rows = generateRows(1000)
  return (
    <ChakraProvider>
      {/* <Table>
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
      </Table> */}
      <VirtualTable
        rows={rows}
        CellsView={TestCells}
      />
    </ChakraProvider>
  )
}
