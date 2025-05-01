'use client'

import { JSX } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import rowmanceContext from './rowmanceContext'

export default function LongRowmantic (): JSX.Element {
  const rowmance = rowmanceContext.use()
  useHotkeys('ctrl+f', (event) => {
    event?.preventDefault()
    rowmance.focus()
  })
  return <></>
}