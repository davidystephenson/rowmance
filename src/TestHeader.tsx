import { Tr } from "@chakra-ui/react"
import RowmanceTh from "./RowmanceTh"

export default function TestHeader() {
  return (
    <>
      <Tr>
        <RowmanceTh>Name</RowmanceTh>
        <RowmanceTh>Email</RowmanceTh>
      </Tr>
      <Tr>
        <RowmanceTh>Name</RowmanceTh>
        <RowmanceTh>Email</RowmanceTh>
      </Tr>
    </>
  )
}