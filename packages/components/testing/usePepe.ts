import { usePress } from "react-aria"
import { useControllState } from "simplex_hook/src/useControllState/useControllState"

const usePepe = () => {
  const defaultValue = new Set(['pepe', 'mamala'])
  const [state, setState] = useControllState(undefined, defaultValue, undefined, 'Pepe')

  const onClick = () => {
    if (state.has('pepe')) {
      setState(new Set(['']))
    } else {
      setState(new Set(['pepe']))
    }
    console.log(state)
  }

  return onClick
}

const usePepe2 = () => {
  const onClick = usePepe()

  const { pressProps } = usePress({
    onPress: onClick,
  })

  return pressProps
}

export { usePepe, usePepe2 }
