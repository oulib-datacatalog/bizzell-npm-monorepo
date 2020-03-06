import React, { Component, Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { Navigation } from './Navigation'
import { CardHeader, CardContent, Card, Text, Button } from '@bizzell/tempest'

type MyState = {
  src_lists: Array<string>
  src: string
  error: any
  isLoaded: boolean
  results: any
}
export class Search extends Component<{}, MyState> {
  constructor(props: any) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
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
  //Args for path will be hierarcical. EX:['locations', 'norfile', 'exists']
  //Item can contain the arg and other characters. search abc hit: qwioemwoqabcqowpewq
  //Character case does not matter
  //Src can be a drop down or user can type in the src
  //Use Ramda for path finding and filtering
  render() {
    let { src_lists, isLoaded, results } = this.state
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Fragment>
          <Navigation />
          <Card>
            <CardContent>
              <select value={this.state.src} onChange={this.handleSelect}>
                {src_lists.map((item: any) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </CardContent>
          </Card>
        </Fragment>
      )
    }
  }
}
