type Config<T> = {
  getKey?: (object: T) => string | undefined
  filterByKey?: (object: T, key: string) => Boolean
  loop?: Boolean
  keyName: string
  componentName: string
}

const defaultGetKey = (value: string | object) => (
  typeof value === 'string'
    ? value
    : 'key' in value
      ? value.key
      : undefined
)

export function createCollectionManager<T extends string | object >(collection: T[], config: Config<T>) {
  const {
    loop = true,
  } = config

  const getCollection = (key: string) => {
    return collection.find(value => getKey(value) === key)
  }

  const getKey = (value: T): string => {
    const key = config.getKey
      ? config.getKey(value)
      : defaultGetKey(value)

    if (typeof key !== 'string') {
      if (process.env.NODE_ENV !== 'production') {
        const errorReturn = key === undefined ? 'undefined' : `${typeof key} ${key}`
        console.error(
          `SimplexUi: The method get"${config.keyName}" of component ${config.componentName} returned ${errorReturn} value, instead of a string`,
        )
      }
    }
    return String(key)
  }

  const getKeys = () => {
    return collection.map((value) => {
      return getKey(value)
    })
  }

  const firstKey = () => {
    const value = collection[0]
    if (!value) return false
    return getKey(value)
  }

  const lastKey = () => {
    const value = collection[collection.length - 1]
    if (!value) return false
    return getKey(value)
  }

  const nextKey = (key: string) => {
    const keyList = getKeys()
    const currentIndex = keyList.indexOf(key)
    if (!loop && currentIndex + 1 === keyList.length) return key
    return keyList[(currentIndex + 1) % collection.length]
  }

  const prevKey = (key: string) => {
    const keyList = getKeys()
    const currentIndex = keyList.indexOf(key)
    if (!loop && currentIndex === 0) return key
    return keyList[(currentIndex - 1 + collection.length) % collection.length]
  }

  const filterByKey = (key: string) => {
    if (typeof key !== 'string') {
      console.error(`Simplexui: The filter${config.keyName} method must receive a string`)
    }
    const normalKey = key.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    const defaultFilterByKey = (object: T) => {
      if (!key) return true
      const value = getKey(object)
      const normaValue = value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      return normaValue.startsWith(normalKey)
    }

    const currentFilter = config.filterByKey || defaultFilterByKey
    return collection.filter(object => currentFilter(object, key))
  }

  return {
    getCollection,
    getKey,
    getKeys,
    nextKey,
    prevKey,
    firstKey,
    lastKey,
    filterByKey,
  }
}
