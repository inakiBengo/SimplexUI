import React, { useEffect } from 'react'
import { useControllState } from '../../simplex_hook/src/useControllState/useControllState'

function Testing() {
  const [value, setValue] = React.useState(true)
  const [state, setState] = useControllState(value, true)

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <>
      <button onClick={() => setValue(!value)}>
        { state ? 'pepe' : 'raul'}
      </button>
    </>
  )
}

export default Testing
