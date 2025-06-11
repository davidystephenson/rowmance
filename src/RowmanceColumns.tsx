import { JSX } from 'react'
import rowmanceContext from './rowmanceContext'

export default function TableColumnsView (): JSX.Element {
  const rowmance = rowmanceContext.use()
  const columns = rowmance.columns.map((column, index) => {
    return (
      <rowmance.Th key={index} index={index}>
        {column}
      </rowmance.Th>
    )
  })
  return <>{columns}</>
}