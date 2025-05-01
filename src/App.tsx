import { ChakraProvider, extendTheme, ThemeConfig, Heading } from '@chakra-ui/react'
import Rowmance from './Rowmance'
import TestTable from './TestTable'
import LongRowmance from './LongRowmance'
import TestCells from './TestCells'
import VirtualTable from './virtual-table'
import { TableVirtuoso } from 'react-virtuoso'
import TestHeader from './TestHeader'
import ColorMode from './ColorMode'

const config: ThemeConfig = {
  initialColorMode: 'system'
}
const theme = extendTheme({ config })

export default function App() {
  const rows = Array.from({ length: 10000 }, (_, i) => {
    return {
      name: `Item ${i + 1}`,
      email: `Email ${i + 1}`
    }
  })
  return (
    <ChakraProvider theme={theme}>
      <ColorMode />
      <Heading>Table</Heading>
      <TestTable />
      <Heading>Rowmance</Heading>
      <Rowmance
        data={[...rows]}
        fixedHeaderContent={TestHeader}
        Cells={TestCells}
      />
      <Heading>Long Rowmance</Heading>
      <LongRowmance
        data={[...rows]}
        CellsView={TestCells}
      />
      <Heading>Virtual Table</Heading>
      <VirtualTable
        rows={[...rows]}
        CellsView={TestCells}
      />
      <Heading>TableVirtuoso</Heading>
      <TableVirtuoso
        style={{ height: '100%' }}
        // useWindowScroll
        data={Array.from({ length: 100 }, (_, index) => ({
          name: `User ${index}`,
          description: `${index} description`
        }))}
        itemContent={(index, user) => (
          <>
            <td style={{ width: 150 }}>{user.name}</td>
            <td>{user.description}</td>
          </>
        )}
      />
    </ChakraProvider>
  )
}
