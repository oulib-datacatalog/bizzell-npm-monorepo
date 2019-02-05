import { createComponent } from './utils'

interface CheckboxProps {
  text?: string
  defaultChecked?: boolean
  defaultEnabled?: boolean
}

export const Checkbox = createComponent<CheckboxProps>((_, ctx) => {
  const { text } = ctx.props
  const { isChecked } = ctx.state

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          value={text}
          checked={isChecked}
          onChange={event => ctx.handleChange(event)}
        />
        {text}
      </label>
    </div>
  )
})

// function handleChange(event: any) {
//   if (this.state.isEnabled) {
//     const isInputChecked = event.target.checked
//     this.setState(state => ({ isChecked: isInputChecked }))
//   }
// }
