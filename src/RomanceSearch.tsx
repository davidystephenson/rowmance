import { JSX } from 'react'
import rowmanceContext from './rowmanceContext'
import { FormControl, InputGroup, InputRightElement } from '@chakra-ui/react'
import RomanceClear from './RomanceClear'

export default function TableSearchView(): JSX.Element {
  const rowmance = rowmanceContext.use()
  return (
    <FormControl>
      <InputGroup>
        <rowmance.Input variant='flushed'
          autoFocus={rowmance.autoFocus}
          onBlur={rowmance.handleBlur}
          onFocus={rowmance.handleFocus}
          onChange={rowmance.handleQueryChange}
          onKeyDown={rowmance.handleKeyDown}
          placeholder='Search'
          ref={rowmance.inputRef}
          value={rowmance.query}
        />
        <InputRightElement w='fit-content'>
          <RomanceClear />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}
