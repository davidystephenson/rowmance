import { Table } from "@chakra-ui/react"
import { TableProps } from "react-virtuoso"
import { JSX } from "react"

export default function ThemeTable (
  props: TableProps
): JSX.Element {
  return (
    <Table size='sm' {...props} />
  )
}