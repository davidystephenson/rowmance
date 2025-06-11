import { TableColumnHeaderProps, Th } from "@chakra-ui/react";

export default function FirstColumnGrand (props: TableColumnHeaderProps & {
  index: number
}) {
  const { index, ...rest } = props
  const w = index === 0 && { w: '100%' }
  return (
    <Th key={index} {...w} {...rest} />
  )
}