# Rowmance

A virtual table React and Chakra UI v2 component with search.


## Installation

`npm install rowmance`

## Usage

```tsx

const rows = Array.from({ length: 10000 }, (_, i) => {
  return {
    name: `Name ${i + 1}`,
    phone: `Phone ${i + 1}`
  }
})

export default function Contact(props: {
  row: { name: string, number: string }
}) {
  return (
    <>
      <Td>{props.row.name}</Td>
      <Td>{props.row.number}</Td>
    </>
  )
}

export default function App() {
  const [filtered, setFiltered] = useState(rows)
  function filter(props: { query?: string }) {
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
      <Rowmance
        columns={['Name', 'Phone']}
        data={filtered}
        filter={filter}
        Cells={TestCells}
        style={{ height: '300px' }}
      />
    </ChakraProvider>
  )
}
```
