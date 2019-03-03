export { Button } from './Button'
export { Checkbox } from './Checkbox'
export { Text } from './Text'

export { joinNames, ClassNames } from './classNames'
import styles from './styles.css'

function isCrushed() {}

global.console.log(process.env.NODE_ENV)
global.console.log(isCrushed.name)
global.console.log(isCrushed.name !== 'isCrushed')

if (
  process.env.NODE_ENV !== 'production' &&
  typeof isCrushed.name === 'string' &&
  isCrushed.name !== 'isCrushed' 
) {
  global.console.log("Warning: You are currently running minified code outside of "
    + "NODE_ENV === 'production'. This means you are running a slower development build of Redux " 
    + "and might not be running the correct code for your production build. Please double check "
    + "you're using the desired code.");
}

export const {
  justifyCenter,
  justifyEnd,
  justifyAround,
  justifyStart,
  justifyBetween,
  alignCenter,
  alignStretch,
  column,
  row,
} = styles
