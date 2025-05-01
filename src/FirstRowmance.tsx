import { JSX } from 'react'
import TableSearchView from './RomanceSearch'
import TableColumnsView from './RowmanceColumns'
import rowmanceContext from './rowmanceContext'
import { Tr } from '@chakra-ui/react'

export default function FirstRowmance (): JSX.Element {
  const rowmance = rowmanceContext.use()
  return (
    <>
      <Tr>
        <rowmance.Th py='0' colSpan={rowmance.columns.length}>
          <TableSearchView />
        </rowmance.Th>
      </Tr>
      <Tr>
        <TableColumnsView />
      </Tr>
    </>
  )
}