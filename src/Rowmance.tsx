'use client'

import { JSX } from 'react'
import { RomanceProps } from './types'
import rowmanceContext from './rowmanceContext'
import RowmanceTable from './RowmanceTable'
import FirstRowmance from './FirstRowmance'

export default function Rowmance<Row>(props: RomanceProps<Row>): JSX.Element {
  const { children, columns, filter, ...rest } = props
  return (
    <rowmanceContext.Provider columns={columns} filter={filter}>
      {children}
      <RowmanceTable
        fixedHeaderContent={FirstRowmance}
        {...rest}
      />
    </rowmanceContext.Provider>

  )
}