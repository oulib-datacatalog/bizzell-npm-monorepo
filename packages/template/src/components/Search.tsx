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
} from '@bizzell/tempest'
import * as R from 'ramda'

type MyState = {
  src_lists: Array<string>
  src: string
  error: any
  isLoaded: boolean
  results: any
  searchPath: string
  searchValue: string
  searchDelim: string
  searchResults: Array<string>
}

export class Search extends Component<{}, MyState> {
  constructor(props: any) {
    super(props)

    this.handleSelect = this.handleSelect.bind(this)
    this.handleChangeSearchVal = this.handleChangeSearchVal.bind(this)
    this.delimOnChange = this.delimOnChange.bind(this)
    this.searchClick = this.searchClick.bind(this)
    this.searchOnChange = this.searchOnChange.bind(this)

    this.state = {
      src_lists: [
        '../../json/api_catalog_data_catalog_digital_objects.json',
        '../../json/api_queue_usertasks.json',
        '../../json/api.json',
      ],
      src: '../../json/api_catalog_data_catalog_digital_objects.json',
      error: null,
      isLoaded: false,
      results: [],
      searchPath: '',
      searchValue: '',
      searchDelim: '',
      searchResults: [],
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
        this.setState({ src: url, results: data, isLoaded: true })
      })
  }

  searchClick(event: any) {
    //Split the search query by a delimiter
    let { results, searchPath, searchDelim, searchValue } = this.state
    let delim = searchDelim
    if (searchDelim.length == 0) {
      delim = ' '
    }
    let nodePath = searchPath.split(delim)

    let found = R.pathEq(nodePath, searchValue)
    let x = R.filter(found, results)
    this.setState({ searchResults: x })
  }

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

  delimOnChange(event: any) {
    this.setState({ searchDelim: event.target.value })
  }

  handleChangeSearchVal(event: any) {
    let value = event.target.value

    this.setState({ searchValue: value })
  }
  //Args for path will be hierarcical. EX:['locations', 'norfile', 'exists']
  //Item can contain the arg and other characters. search abc hit: qwioemwoqabcqowpewq
  //Character case does not matter
  //Src can be a drop down or user can type in the src
  //Use Ramda for path finding and filtering
  render() {
    let { src_lists, isLoaded, searchResults } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Fragment>
          <Navigation />
          <Card>
            <CardContent>
              <div id="search">
                <div id="src_select">
                  <select value={this.state.src} onChange={this.handleSelect}>
                    {src_lists.map((item: any) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div id="search_criteria_input">
                  <label>Paths</label>
                  <input
                    type="text"
                    name="args_input"
                    value={this.state.searchPath}
                    onChange={this.searchOnChange}
                  />
                  <label>Delim</label>
                  <input
                    type="text"
                    name="delim"
                    value={this.state.searchDelim}
                    onChange={this.delimOnChange}
                  />
                  <label>Value</label>
                  <input
                    type="text"
                    name="value"
                    onChange={this.handleChangeSearchVal}
                  />
                </div>
                <input
                  type="submit"
                  value="Search"
                  onClick={this.searchClick}
                />
              </div>
            </CardContent>
          </Card>
        </Fragment>
      )
    }
  }
}
