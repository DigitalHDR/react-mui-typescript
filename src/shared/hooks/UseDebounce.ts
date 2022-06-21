import { useCallback, useRef } from 'react'

export const useDebounce = (deley = 300, notDeleyInFirtTime = true) => {
  const isFirtTime = useRef(notDeleyInFirtTime)
  const debouncing = useRef<NodeJS.Timeout>()

  const debounce = useCallback(
    (func: () => void) => {
      if (isFirtTime.current) {
        isFirtTime.current = false
        func()
      } else {
        if (debouncing.current) {
          clearTimeout(debouncing.current)
        }
        debouncing.current = setTimeout(() => func(), deley)
      }
    },
    [deley]
  )
  return { debounce }
}
