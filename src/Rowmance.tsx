'use client'

import { ContextProp, ItemProps, ScrollerProps, TableBodyProps, TableComponents, TableProps, TableVirtuoso, TableVirtuosoProps } from 'react-virtuoso'
import { Box, Tr, Tbody, Table, Thead, TableHeadProps } from '@chakra-ui/react'
import { ComponentType, forwardRef, JSX } from 'react'
import FirstRowmance from './FirstRowmance'

export default function Rowmance<Row>(props: {
  Cells: (props: { index: number, row: Row }) => JSX.Element
  data: Row[]
  Scroller?: ComponentType<ScrollerProps>
  Table?: ComponentType<TableProps  & ContextProp<unknown>>
  TableBody?: ComponentType<TableBodyProps>
  TableHead?: ComponentType<TableHeadProps & ContextProp<unknown>>
  TableRow?: ComponentType<ItemProps<Row> & ContextProp<unknown>>
} & TableVirtuosoProps<Row, unknown>): JSX.Element {
  const {
    Cells: CellsProp,
    Scroller: ScrollerProp,
    Table: TableProp,
    TableBody: TableBodyProp,
    TableHead: TableHeadProp,
    TableRow: TableRowProp,
    ...rest
  } = props
  const ScrollerView = ScrollerProp ?? Box
  const TableView = TableProp ?? Table
  const TableBodyView = TableBodyProp ?? Tbody
  const TableHeadView = TableHeadProp ?? Thead
  const TableRowView = TableRowProp ?? Tr
  const ScrollerForward: TableComponents['Scroller'] = forwardRef((props, ref) => {
    return <ScrollerView {...props} ref={ref} />
  })
  const TableBodyForward: TableComponents['TableBody'] = forwardRef((props, ref) => {
    return <TableBodyView {...props} ref={ref} />
  })
  const TableHeadForward: TableComponents['TableHead'] = forwardRef((props, ref) => {
    return <FirstRowmance TableHead={TableHeadView} {...props} ref={ref} />
  })
  function itemContent(index: number, row: Row) {
    return <CellsProp index={index} row={row} />
  }
  const tableComponents: TableComponents<Row> = {
    Scroller: ScrollerForward,
    Table: TableView,
    TableBody: TableBodyForward,
    TableHead: TableHeadForward,
    TableRow: TableRowView
  }
  return (
    <TableVirtuoso
      components={tableComponents}
      useWindowScroll
      itemContent={itemContent}
      {...rest}
    />
  )
}