import React, { Component, Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { Navigation } from './Navigation'
import {
  CardHeader,
  CardContent,
  Card,
  Text,
  Button,
  Checkbox,
  List,
  joinNames,
  alignCenter,
  column,
} from '@bizzell/tempest'
import * as R from 'ramda'

//******Add filter******* path
//Deploy site
type MyState = {
  src_lists: Array<string>
  src: string
  error: any
  isLoaded: boolean
  jsonData: any
  searchPath: string
  searchValue: string | number | boolean
  searchDelim: string
  searchResults: any
}

export class Search extends Component<{}, MyState> {
  constructor(props: any) {
    super(props)

    this.handleSelect = this.handleSelect.bind(this)
    this.searchValOnChange = this.searchValOnChange.bind(this)
    this.delimOnChange = this.delimOnChange.bind(this)
    this.searchClick = this.searchClick.bind(this)
    this.searchOnChange = this.searchOnChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      src_lists: [
        '../../json/api_catalog_data_catalog_digital_objects.json',
        '../../json/api_queue_usertasks.json',
        '../../json/api.json',
        '../../json/array.json',
      ],
      src: '../../json/api_catalog_data_catalog_digital_objects.json',
      error: null,
      isLoaded: false,
      jsonData: [],
      searchPath: '',
      searchValue: '',
      searchDelim: '',
      searchResults: '',
    }
  }

  componentDidMount() {
    let url = this.state.src
    this.setSrc(url)
  }

  handleSelect(event: any) {
    let url = event.target.value
    this.setSrc(url)
  }

  setSrc(url: string) {
    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({ src: url, jsonData: data, isLoaded: true })
      })
  }
  isArray(what: any) {
    return Object.prototype.toString.call(what) === '[object Array]'
  }
  searchClick(event: any) {
    let { jsonData, searchPath, searchDelim, searchValue } = this.state
    let delim = searchDelim

    let isArray = R.pathSatisfies(R.is(Array), ['results'], jsonData) //=> true

    //Do nothing
    if (searchPath.length == 0) {
      return
    }

    //If no delim was entered, delim is space
    if (searchDelim.length == 0) {
      delim = ' '
    }
    //Split the search query by the delimiter
    let nodePath = searchPath.split(delim)

    //Array case
    if (R.pathSatisfies(R.is(Array), [nodePath[0]], jsonData)) {
      if (searchValue === '') {
        let result = JSON.stringify(R.path(nodePath, jsonData))
        this.setState({ searchResults: result })
      } else {
        //Remove first argument of path so pathEq works
        let newPath = nodePath.slice(1, nodePath.length)
        let isEqualVal = R.pathEq(newPath, searchValue)
        let results = R.filter(isEqualVal, jsonData.results)
        let stringResult = JSON.stringify(results)
        this.setState({ searchResults: stringResult })
      }
    }
    //Non-array
    else {
      //If nothing was entered to compare result
      if (searchValue === '') {
        let result = JSON.stringify(R.path(nodePath, jsonData))
        this.setState({ searchResults: result })
      }
      //Compare against the value
      else {
        //Check if node is an array
        if (R.path(nodePath, jsonData) === searchValue) {
          this.setState({ searchResults: 'true' })
        } else {
          this.setState({ searchResults: 'false' })
        }
      }
    }
  }

  //Update the path input
  searchOnChange(event: any) {
    //Dont allow space as first character
    if (this.state.searchPath.length == 0) {
      if (event.target.value != ' ') {
        this.setState({ searchPath: event.target.value })
      }
    } else {
      this.setState({ searchPath: event.target.value })
    }
  }

  //Update the delim input
  delimOnChange(event: any) {
    this.setState({ searchDelim: event.target.value })
  }

  //Update the value input
  searchValOnChange(event: any) {
    let value = event.target.value
    //if the value is a boolean value(true or false) store it as a boolean
    if (value === 'true' || value === 'false') {
      value = value === 'true' ? true : false
    } else if (!isNaN(Number(value)) && value !== '') {
      value = Number(value)
    }
    this.setState({ searchValue: value })
  }

  handleCheck(event: any) {
    document.getElementById('')
  }

  render() {
    let { src_lists, isLoaded, searchResults } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Fragment>
          <Navigation />
          <Card>
            <CardContent className={joinNames(column, alignCenter)}>
              <div>
                <input id="custom_src_input" disabled type="text" />
                <input
                  type="checkbox"
                  id="custom_src_check"
                  name="custom_src_check"
                  onClick={this.handleCheck}
                />
              </div>
            </CardContent>

            <CardContent className={joinNames(column, alignCenter)}>
              <select value={this.state.src} onChange={this.handleSelect}>
                {src_lists.map((item: any) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </CardContent>
          </Card>

          <Card>
            <CardContent className={joinNames(column, alignCenter)}>
              <div>
                <label>Paths</label>
                <input
                  type="text"
                  name="args_input"
                  value={this.state.searchPath}
                  onChange={this.searchOnChange}
                />
              </div>
              <div>
                <label>Delim</label>
                <input
                  type="text"
                  name="delim"
                  value={this.state.searchDelim}
                  onChange={this.delimOnChange}
                />
              </div>
              <div>
                <label>Value</label>
                <input
                  type="text"
                  name="value"
                  onChange={this.searchValOnChange}
                />
              </div>
            </CardContent>

            <CardContent className={joinNames(column, alignCenter)}>
              <input type="submit" value="Search" onClick={this.searchClick} />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div id="search_results">
                Results:
                {searchResults}
              </div>
            </CardContent>
          </Card>
        </Fragment>
      )
    }
  }
}
