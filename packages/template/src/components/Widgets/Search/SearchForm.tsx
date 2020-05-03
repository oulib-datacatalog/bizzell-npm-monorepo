import React from 'react'
import InputText from '../../common/InputText'
import {
  Card,
  CardContent,
  joinNames,
  alignCenter,
  column,
} from '@bizzell/tempest'
const SearchForm = (props: any) => (
  <form onSubmit={props.onSearch}>
    <Card>
      <CardContent className={joinNames(column, alignCenter)}>
        <InputText
          label="Source"
          onChange={props.onChange}
          name="src"
          value={props.searchParams.src}
        />
      </CardContent>
    </Card>

    <Card>
      <CardContent className={joinNames(column, alignCenter)}>
        <InputText
          label="Path"
          onChange={props.onChange}
          name="path"
          value={props.searchParams.path}
        />

        <InputText
          label="Delim"
          onChange={props.onChange}
          name="delim"
          value={props.searchParams.delim}
        />
        <InputText
          label="Value"
          onChange={props.onChange}
          name="value"
          value={props.searchParams.value}
        />

        <InputText
          label="Filter"
          onChange={props.onChange}
          name="filterBy"
          value={props.searchParams.filterBy}
        />
        <input type="submit" value="Search" />
      </CardContent>
    </Card>
  </form>
)

export default SearchForm
