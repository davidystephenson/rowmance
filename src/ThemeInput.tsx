import { ReactNode, forwardRef } from 'react'
import { FormControl, FormControlProps, FormErrorMessage, FormLabel, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'

const ThemeInputView = forwardRef<
HTMLInputElement,
InputProps & {
  controlProps?: FormControlProps
  errorMessage?: string
  label?: string
  rightElement?: ReactNode
}
>((props, ref) => {
  const { errorMessage, label, rightElement, ...restProps } = props
  const invalid = errorMessage != null
  const errorView = invalid && (
    <FormErrorMessage>{errorMessage}</FormErrorMessage>
  )
  const rightView = rightElement != null && (
    <InputRightElement w='fit-content'>{rightElement}</InputRightElement>
  )
  const labelView = label != null && <FormLabel>{label}</FormLabel>
  return (
    <FormControl isInvalid={invalid} {...props.controlProps}>
      {labelView}
      <InputGroup>
        <Input
          variant='flushed'
          {...restProps}
          ref={ref}
          size='sm'
        />
        {rightView}
      </InputGroup>
      {errorView}
    </FormControl>
  )
})
export default ThemeInputView