import { ChakraProvider, Heading } from '@chakra-ui/react'
import Rowmance from './Rowmance'
import TestTable from './TestTable'
import LongRowmance from './LongRowmance'
import TestCells from './TestCells'
import VirtualTable from './virtual-table'

export default function App() {
  const rows = Array.from({ length: 10000 }, (_, i) => {
    return {
      name: `Item ${i + 1}`,
      email: `Email ${i + 1}`
    }
  })
  return (
    <ChakraProvider>
      <Heading>Table</Heading>
      <TestTable />
      <Heading>Rowmance</Heading>
      <Rowmance
        data={[...rows]}
        CellsView={TestCells}
      />
      {/* <Heading>Long Rowmance</Heading>
      <LongRowmance
        data={[...rows]}
        CellsView={TestCells}
      />
      <Heading>Virtual Table</Heading>
      <VirtualTable
        rows={[...rows]}
        CellsView={TestCells}
      /> */}
    </ChakraProvider>
  )
}
