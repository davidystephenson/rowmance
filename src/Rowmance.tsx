'use client'

import { JSX } from 'react'
import { RowmanceProps } from './types'
import rowmanceContext from './rowmanceContext'
import RowmanceTable from './RowmanceTable'
import FirstRowmance from './FirstRowmance'

export default function Rowmance<Row>(props: RowmanceProps<Row>): JSX.Element {
  const { children, columns, crush, filter, ...rest } = props
  return (
    <rowmanceContext.Provider
      columns={columns}
      crush={crush}
      filter={filter}
      IconButton={props.IconButton}
      Input={props.Input}
      Th={props.Th}
    >
      {children}
      <RowmanceTable
        fixedHeaderContent={FirstRowmance}
        {...rest}
      />
    </rowmanceContext.Provider>
  )
}