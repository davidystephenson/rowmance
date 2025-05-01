import { MdClear } from 'react-icons/md'
import rowmanceContext from './rowmanceContext'
import { JSX } from 'react'

export default function RomanceClear (): JSX.Element {
  const rowmance = rowmanceContext.use()
  if (rowmance.queried) {
    return <></>
  }
  function handleClick (): void {
    rowmance.clearQuery()
  }
  return (
    <rowmance.IconButton
      aria-label='Clear search'
      onClick={handleClick}
      variant='light'
      icon={<MdClear />}
    />
  )
}