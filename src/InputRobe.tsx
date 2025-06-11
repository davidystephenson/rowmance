import { forwardRef, ReactNode } from 'react'
import { FormControl, FormControlProps, FormErrorMessage, FormLabel, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'

export type InputRobeProps = InputProps & {
  control?: FormControlProps
  error?: ReactNode
  label?: string
  rightElement?: ReactNode | undefined | null
}

const InputRobe = forwardRef<
HTMLInputElement,
InputRobeProps
>((props, ref) => {
  const { type, error, label, rightElement: right, ...restProps } = props
  const dateField = type === 'date'
  const inputType = dateField ? 'text' : type
  const invalid = error != null
  const errorView = invalid && (
    <FormErrorMessage>{error}</FormErrorMessage>
  )
  const rightView = right != null && (
    <InputRightElement w='fit-content'>{right}</InputRightElement>
  )
  const labelView = label != null && <FormLabel>{label}</FormLabel>
  return (
    <FormControl isInvalid={invalid} {...props.control}>
      {labelView}
      <InputGroup>
        <Input
          variant='flushed'
          {...restProps}
          size='sm'
          type={inputType}
          ref={ref}
        />
        {rightView}
      </InputGroup>
      {errorView}
    </FormControl>
  )
})
export default InputRobe