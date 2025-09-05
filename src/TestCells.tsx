import { Td } from "@chakra-ui/react"

export default function TestCells(props: {
  debug?: boolean
  row: { name: string, email: string }
}) {
  if (props.debug === true) {
    console.log('props', props)
  }
  return (
    <>
      <Td>{props.row.name} {props.debug && '(debug)'}</Td>
      <Td whiteSpace='nowrap'>{props.row.email}</Td>
    </>
  )
}