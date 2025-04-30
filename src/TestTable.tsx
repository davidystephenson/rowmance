import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

export default function TestTable() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Dorothy Parker</Td>
          <Td>dorothy@parker.com</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}