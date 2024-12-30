export const createKeyGenerateor = (prefix = 'key') => {
  let counter = 0

  return () => {
    counter += 1
    return `${prefix}-${counter}`
  }
}
