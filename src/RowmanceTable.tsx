'use client'

import { TableComponents, TableVirtuoso } from 'react-virtuoso'
import { Box, Tr, Tbody, Table, Thead } from '@chakra-ui/react'
import { forwardRef, JSX } from 'react'
import RomanceThead from './RowmanceThead'
import { RomanceTableProps } from './types'

export default function RowmanceTable <Row> (props: RomanceTableProps<Row>): JSX.Element {
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
    return <RomanceThead TableHead={TableHeadView} {...props} ref={ref} />
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