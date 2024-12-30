export function classnames(mix: { [key: string]: boolean | undefined }, ...styles: (string | undefined)[]) {
  let str = 'simplexui-themes'
  for (let x in mix) {
    if (mix[x]) {
      str && (str += ' ')
      str += x
    }
  }
  str += ' ' + styles.join(' ')
  return str
}
