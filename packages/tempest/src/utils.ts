/**
 * Interprets a props object to extract an option and performs
 * checks to ensure multiple options of the same category are
 * not being selected or ignored.
 * @param options A list of possible option values to check for
 * @param props The component props object to extract an option from
 * @param defaultValue An optional default value in case none is specified by props
 * @returns The option specified by the props object
 */
export function readOption(
  options: string[],
  props: { [prop: string]: unknown; type?: string },
  defaultValue?: string,
) {
  return (
    options
      .filter(option => props[option] || props.type === option)
      .find((v, i, selections) => {
        if (selections.length > 1) {
          console.error(`Ambiguous options: ${selections}`)
          return false
        }
        return true
      }) || defaultValue
  )
}
