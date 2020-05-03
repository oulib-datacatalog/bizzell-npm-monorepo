import React from 'react'

const InputText = (props: any) => (
  <>
    <label>{props.label}</label>
    <input
      id={props.id}
      type="text"
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      className=""
    />
  </>
)

export default InputText
