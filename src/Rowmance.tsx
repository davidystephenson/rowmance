'use client'

import { JSX } from 'react'
import { RowmanceProps } from './types'
import rowmanceContext from './rowmanceContext'
import RowmanceTable from './RowmanceTable'
import FirstRowmance from './FirstRowmance'

export default function Rowmance<Row>(props: RowmanceProps<Row>): JSX.Element {
  const {
    children, columns, crush, filter, IconButton, Input, Th, ...rest
  } = props
  return (
    <rowmanceContext.Provider
      columns={columns}
      crush={crush}
      filter={filter}
      IconButton={IconButton}
      Input={Input}
      Th={Th}
    >
      {children}
      <RowmanceTable
        fixedHeaderContent={FirstRowmance}
        {...rest}
      />
    </rowmanceContext.Provider>
  )
}