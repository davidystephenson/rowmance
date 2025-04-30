import { Td } from "@chakra-ui/react"

export default function TestCells(props: {
  row: { name: string, email: string }
}) {
  return (
    <>
      <Td>{props.row.name}</Td>
      <Td>{props.row.email}</Td>
    </>
  )
}