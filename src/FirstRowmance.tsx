import { TableHeadProps, Thead } from '@chakra-ui/react'
import { ComponentType, forwardRef } from 'react'
import { ContextProp } from 'react-virtuoso'

type FirstRowmanceProps = TableHeadProps & {
  TableHead?: ComponentType<TableHeadProps & ContextProp<unknown>> 
} & ContextProp<unknown>

const FirstRowmance = forwardRef<
  HTMLTableSectionElement, FirstRowmanceProps
>((props, ref) => {
  const { TableHead, ...rest } = props
  const TableHeadView = TableHead ?? Thead
  return (
    <TableHeadView
      boxShadow='inset 0px 0px 0px 10000px var(--chakra-colors-chakra-body-bg), 0 1px 1px -1px gray'
      zIndex='1 !important'
      {...rest}
      ref={ref}
    />
  )
})
export default FirstRowmance