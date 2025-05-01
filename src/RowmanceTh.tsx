import { TableColumnHeaderProps, Th, useColorModeValue } from "@chakra-ui/react"
import { JSX } from "react"

export default function RowmanceTh (props: TableColumnHeaderProps): JSX.Element {
  const weight = useColorModeValue('700', '100')
  const color = `var(--chakra-colors-gray-${weight})`
  return (
    <Th borderBottomWidth='1px' borderBottomStyle='solid' borderBottomColor={color} {...props} />
  )
}