import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import Rowmance from './Rowmance'
import TestCells from './TestCells'
import { useState } from 'react'
import InputRobe from './InputRobe'
import FirstColumnGrand from './FirstColumnGrand'
const config: ThemeConfig = {
  initialColorMode: 'system'
}
const theme = extendTheme({ config })

const rows = Array.from({ length: 10000 }, (_, i) => {
  return {
    name: `Item ${i + 1}`,
    email: `Email ${i + 1}`
  }
})

export default function App() {
  const [filtered, setFiltered] = useState(rows)
  function filter(props: {
    query?: string,
  }) {
    const filtered = rows.filter(row => {
      if (!props.query) {
        return true
      }
      return row.name.includes(props.query)
    })
    setFiltered(filtered)
  }

  return (
    <ChakraProvider theme={theme}>
      {/* <ColorMode />
      <Heading>Table</Heading>
      <TestTable /> */}
      {/* <Heading>Rowmance </Heading> */}
      <Rowmance
        Cells={TestCells}
        columns={['Name', 'Email']}
        crush
        data={filtered}
        filter={filter}
        Input={InputRobe}
        Th={FirstColumnGrand}
        style={{ height: '300px' }}
      />
      {/* <Rowmance
        columns={['Name', 'Email']}
        data={filtered}
        filter={filter}
        Cells={TestCells}
        style={{ height: '300px' }}
        Input={ThemeInput}
        crush
      />
      <Heading>LongRowmance</Heading>
      <LongRowmance
        columns={['Name', 'Email']}
        data={filtered}
        filter={filter}
        Cells={TestCells}
        style={{ height: '300px' }}
        Input={ThemeInput}
        Table={ThemeTable}
      />

      <Heading>TableVirtuoso</Heading>
      <div style={{ background: 'red', height: '300px' }}>
        <TableVirtuoso
          data={Array.from({ length: 100 }, (_, index) => ({
            name: `User ${index}`,
            description: `${index} description`
          }))}
          itemContent={(_, user) => (
            <>
              <td style={{ width: 150 }}>{user.name}</td>
              <td>{user.description}</td>
            </>
          )}
        />
      </div> */}
    </ChakraProvider>
  )
}
