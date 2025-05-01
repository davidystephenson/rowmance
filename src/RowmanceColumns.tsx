import { JSX } from 'react'
import rowmanceContext from './rowmanceContext'

export default function TableColumnsView (): JSX.Element {
  const rowmance = rowmanceContext.use()
  console.log('rowmance.columns', rowmance.columns)
  const columns = rowmance.columns.map((column, index) => {
    const w = index === 0 && { w: '100%' }
    return (
      <rowmance.Th key={index} {...w}>
        {column}
      </rowmance.Th>
    )
  })
  return <>{columns}</>
}