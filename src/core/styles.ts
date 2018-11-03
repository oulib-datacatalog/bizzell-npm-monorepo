import joinNames from 'classnames'
export { joinNames }

export type ClassNames = typeof joinNames extends (...args: infer A) => any
  ? A | A[number]
  : never
