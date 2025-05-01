import contextCreator from "context-creator";
import { RomanceProviderProps } from "./types";
import { useRef, useState, useEffect, ChangeEvent, useCallback, useMemo } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { IconButton, Th } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const rowmanceContext = contextCreator({
  name: 'rowmance',
  useValue: (props: RomanceProviderProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [autoFocus, setAutoFocus] = useState(true)
    const [query, setQuery] = useState('')
    const [focused, setFocused] = useState(false)
    useHotkeys('ctrl+f', (event) => {
      event?.preventDefault()
      inputRef.current?.focus()
    })
    useEffect(() => {
      inputRef.current?.blur()
      setAutoFocus(false)
    }, [])
    const queried = useMemo(() => query.length > 0, [query])
    const { columns, filter } = props
    const IconButtonView = props.IconButton ?? IconButton
    const InputView = props.Input ?? Input
    const ThView = props.Th ?? Th
    const clearQuery = useCallback(() => {
      setQuery('')
      filter({ query: undefined })
    }, [filter])
    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === 'Escape') {
        setAutoFocus(false)
        clearQuery()
        inputRef.current?.blur()
      }
    }, [clearQuery])
    const handleQueryChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
      const lower = event.target.value.toLowerCase()
      setQuery(lower)
      filter({ query: lower })
      setAutoFocus(true)
    }, [filter])
    const handleBlur = useCallback(() => {
      setAutoFocus(false)
      setFocused(false)
    }, [])
    const handleFocus = useCallback(() => {
      setFocused(true)
    }, [])
    const searching = useMemo(() => queried || focused, [queried, focused])
    const value = useMemo(() => ({
      autoFocus,
      clearQuery,
      columns,
      inputRef,
      filter,
      handleBlur,
      handleFocus,
      handleKeyDown,
      handleQueryChange,
      IconButton: IconButtonView,
      Input: InputView,
      queried,
      query,
      searching,
      Th: ThView
    }), [
      autoFocus,
      clearQuery,
      columns,
      inputRef,
      filter,
      handleBlur,
      handleFocus,
      handleKeyDown,
      handleQueryChange,
      IconButtonView,
      InputView,
      queried,
      query,
      searching,
      ThView
    ])
    return value
  },
})
export default rowmanceContext