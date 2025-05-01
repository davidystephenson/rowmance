import { JSX } from 'react'
import RowmanceSearch from './RowmanceSearch'
import TableColumnsView from './RowmanceColumns'
import rowmanceContext from './rowmanceContext'
import { Tr } from '@chakra-ui/react'

export default function FirstRowmance (): JSX.Element {
  const rowmance = rowmanceContext.use()
  const crush = rowmance.crush ? { py: '0' } : {}
  return (
    <>
      <Tr>
        <rowmance.Th colSpan={rowmance.columns.length} {...crush}>
          <RowmanceSearch />
        </rowmance.Th>
      </Tr>
      <Tr>
        <TableColumnsView />
      </Tr>
    </>
  )
}