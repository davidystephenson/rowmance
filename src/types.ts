import { ComponentType, JSX, ReactNode } from "react"
import { ContextProp, TableVirtuosoProps, ItemProps, TableProps, ScrollerProps, TableBodyProps } from "react-virtuoso"
import { IconButtonProps, TableHeadProps, InputProps, TableColumnHeaderProps } from "@chakra-ui/react"

export type RomanceTableProps <Row> = {
  Cells: (props: { index: number, row: Row }) => JSX.Element
  data: Row[]
  Scroller?: ComponentType<ScrollerProps>
  Table?: ComponentType<TableProps  & ContextProp<unknown>>
  TableBody?: ComponentType<TableBodyProps>
  TableHead?: ComponentType<TableHeadProps & ContextProp<unknown>>
  TableRow?: ComponentType<ItemProps<Row> & ContextProp<unknown>>
} & TableVirtuosoProps<Row, unknown>

export type RomanceProviderProps = {
  columns: ReactNode[]
  filter: (props: { query?: string | undefined }) => void
  IconButton?: ComponentType<IconButtonProps>
  Input?: ComponentType<InputProps>
  Th?: ComponentType<TableColumnHeaderProps>
}

export type RomanceProps <Row> = RomanceTableProps<Row> & RomanceProviderProps

export type RomanceTheadProps = TableHeadProps & {
  TableHead?: ComponentType<TableHeadProps & ContextProp<unknown>> 
} & ContextProp<unknown>