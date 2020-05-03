import React, { Fragment, useState, useEffect } from 'react'
import { Navigation } from '../../common/Navigation'
import { Card, CardContent } from '@bizzell/tempest'
import SearchForm from './SearchForm'
import { getResults } from './SearchUtil'
import Collapsible from 'react-collapsible'
import { column, alignCenter, joinNames } from '@bizzell/tempest'
import { path } from 'ramda'

const SearchPage = (props: any) => {
  const [data, setData] = useState({
    data: '',
    isLoaded: false,
  })
  const [searchParams, setSearchParams] = useState({
    //Hard coded url to json data. Change this to empty string when live backend is available
    src: '../../json/api_catalog_data_catalog_digital_objects.json',
    path: '',
    delim: '',
    value: '',
    filterBy: '',
  })

  const [result, setResult] = useState([])

  useEffect(() => {
    fetch(searchParams.src)
      .then(res => res.json())
      .then(jsonData => {
        setData({
          data: jsonData,
          isLoaded: true,
        })
      })
  }, [])

  const handleChange = ({ target }: any) => {
    //Ignore space characters for certain inputs
    if (
      target.value === ' ' &&
      (target.name === 'src' ||
        target.name === 'value' ||
        target.name === 'filterBy')
    ) {
      return
    }

    setSearchParams({
      ...searchParams,
      [target.name]: target.value,
    })
  }

  const handleSearch = (event: any) => {
    event.preventDefault()

    setResult(getResults(searchParams, data.data))
  }
  return (
    <>
      <Navigation />
      <Card>
        <CardContent>
          <SearchForm
            searchParams={searchParams}
            onChange={handleChange}
            onSearch={handleSearch}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className={joinNames(column, alignCenter)}>
          {result.length === 1 && result}
          <div
            style={{
              textAlign: 'center',
            }}
          >
            {result.length > 1 &&
              result.map((item, index) => (
                <Collapsible
                  triggerStyle={{
                    fontSize: '16px',
                    backgroundColor: '#7FFFD4',
                  }}
                  trigger={'item' + (index + 1).toString()}
                >
                  {item}
                </Collapsible>
              ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default SearchPage
