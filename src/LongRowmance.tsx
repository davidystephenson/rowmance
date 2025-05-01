'use client'

import { JSX } from 'react'
import { RowmanceProps } from './types'
import Rowmance from './Rowmance'
import LongRowmantic from './LongRowmantic'

export default function LongRowmance<Row>(
  props: RowmanceProps<Row>
): JSX.Element {
  const { children, ...rest } = props
  return (
    <Rowmance
      style={{ height: '100%' }}
      useWindowScroll
      {...rest}
    >
      <LongRowmantic />
      {children}
    </Rowmance>
  )
}