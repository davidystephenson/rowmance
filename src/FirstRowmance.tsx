import { TableHeadProps, Thead, useColorModeValue } from '@chakra-ui/react'
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
  const borderColor = useColorModeValue('700', '100')
  const innerShadow = `inset 0px 0px 0px 10000px var(--chakra-colors-chakra-body-bg)`
  const outerShadow = `0 0.8px 0.8px -0.8px var(--chakra-colors-gray-${borderColor})`
  const boxShadow = `${innerShadow}, ${outerShadow}`
  return (
    <TableHeadView
      boxShadow={boxShadow}
      zIndex='1 !important'
      {...rest}
      ref={ref}
    />
  )
})
export default FirstRowmance