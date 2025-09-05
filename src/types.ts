import { ComponentType, ReactNode } from "react"
import { ContextProp, TableVirtuosoProps, ItemProps, TableProps, ScrollerProps, TableBodyProps } from "react-virtuoso"
import { IconButtonProps, TableHeadProps, InputProps, TableColumnHeaderProps } from "@chakra-ui/react"

export type RowmanceTableProps <Row> = {
  Cells: ComponentType<{debug?: boolean, index: number, row: Row}>
  data: Row[]
  debug?: boolean
  Scroller?: ComponentType<ScrollerProps>
  Table?: ComponentType<TableProps  & ContextProp<unknown>>
  TableBody?: ComponentType<TableBodyProps>
  TableHead?: ComponentType<TableHeadProps & ContextProp<unknown>>
  TableRow?: ComponentType<ItemProps<Row> & ContextProp<unknown>>
} & TableVirtuosoProps<Row, unknown>

export type RowmanceColumnProps = TableColumnHeaderProps & {
  index: number
}

export type RowmanceProviderProps = {
  columns: ReactNode[]
  crush?: boolean
  debug?: boolean
  onSearch: (props: { query?: string | undefined }) => void
  IconButton?: ComponentType<IconButtonProps>
  Input?: ComponentType<InputProps> 
  Th?: ComponentType<RowmanceColumnProps>
}

export type RowmanceProps <Row> = RowmanceTableProps<Row> & RowmanceProviderProps

export type RowmanceTheadProps = TableHeadProps & {
  TableHead?: ComponentType<TableHeadProps & ContextProp<unknown>> 
} & ContextProp<unknown>