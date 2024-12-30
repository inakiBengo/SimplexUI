import React from 'react'

let idCounter = 0

function globalId() {
  idCounter += 1
  return 'simplex-' + idCounter
}

export function useId() {
  if (React.useId) {
    return React.useId()
  }

  return React.useMemo(() => globalId(), [])
}
