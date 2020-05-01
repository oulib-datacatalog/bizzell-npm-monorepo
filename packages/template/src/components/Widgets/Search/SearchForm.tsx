import React from 'react'
import InputText from '../../common/InputText'
const SearchForm = (props: any) => (
  <form>
    <InputText
      label="Source"
      onChange={props.onChange}
      name="src"
      value={props.searchParams.src}
    />

    <InputText
      label="Delim"
      onChange={props.onChange}
      name="delim"
      value={props.searchParams.delim}
    />

    <InputText
      label="Path"
      onChange={props.onChange}
      name="path"
      value={props.searchParams.path}
    />

    <InputText
      label="Filter"
      onChange={props.onChange}
      name="filterBy"
      value={props.searchParams.filterBy}
    />

    <input type="submit" value="Search" className="btn btn-primary" />
  </form>
)

export default SearchForm
