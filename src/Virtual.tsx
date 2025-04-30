'use client'

import { TableComponents, TableVirtuoso } from 'react-virtuoso'
import { Box, Tr, Tbody, Table, Thead } from '@chakra-ui/react'
import { forwardRef, JSX } from 'react'

export default function VirtualTable<Row> (props: {
  CellsView: (props: { row: Row }) => JSX.Element
  rows: Row[]
}): JSX.Element {
  const Scroller: TableComponents['Scroller'] = forwardRef<HTMLDivElement>((props, ref) => {
    return <Box {...props} ref={ref} />
  })
  const tableComponents: TableComponents<Row> = {
    Scroller,
    Table,
    TableBody: forwardRef<HTMLTableSectionElement>((props, ref) => <Tbody {...props} ref={ref} />),
    TableHead: Thead,
    TableRow: Tr
  }
  return (
    <TableVirtuoso
      components={tableComponents}
      style={{ height: '100%' }}
      data={props.rows}
      useWindowScroll
      // fixedHeaderContent={TableHeaderView}
      itemContent={(_, row) => (
        <props.CellsView row={row} />
      )}
    />
  )
}