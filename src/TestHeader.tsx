import { Tr } from "@chakra-ui/react"
import RomanceTh from "./RomanceTh"

export default function TestHeader() {
  return (
    <>
      <Tr>
        <RomanceTh>Name</RomanceTh>
        <RomanceTh>Email</RomanceTh>
      </Tr>
      <Tr>
        <RomanceTh>Name</RomanceTh>
        <RomanceTh>Email</RomanceTh>
      </Tr>
    </>
  )
}