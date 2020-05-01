import React, { Fragment, useState } from 'react'
import { Navigation } from '../../common/Navigation'
import { Card, CardContent } from '@bizzell/tempest'
import SearchForm from './SearchForm'
// import { Navigation } from '../../common/Navigation'
// import {
//   CardHeader,
//   CardContent,
//   Card,
//   Text,
//   Button,
//   Checkbox,
//   List,
//   joinNames,
//   alignCenter,
//   column,
// } from '@bizzell/tempest'
// import SearchForm from './SearchForm'
// import * as R from 'ramda'

const SearchPage = (props: any) => {
  const [searchParams, setSearchParams] = useState({
    src: '',
    path: '',
    delim: '',
    filterBy: '',
  })

  const [result, setResult] = useState({})

  const handleChange = ({ target }: any) => {
    setSearchParams({
      ...searchParams,
      [target.name]: target.value,
    })
  }

  return (
    <>
      <Navigation />
      <Card>
        <CardContent>
          <SearchForm searchParams={searchParams} onChange={handleChange} />
        </CardContent>
      </Card>
    </>
  )
}

export default SearchPage

// type MyState = {
//   src_lists: Array<string>
//   src: string
//   error: any
//   isLoaded: boolean
//   jsonData: any
//   searchPath: string
//   searchValue: string | number | boolean
//   searchDelim: string
//   searchResults: any
//   filterVal: string
// }

// export class Search extends Component<{}, MyState> {
//   constructor(props: any) {
//     super(props)

//     this.handleSelect = this.handleSelect.bind(this)
//     this.searchValOnChange = this.searchValOnChange.bind(this)
//     this.delimOnChange = this.delimOnChange.bind(this)
//     this.searchClick = this.searchClick.bind(this)
//     this.searchOnChange = this.searchOnChange.bind(this)
//     this.handleCheck = this.handleCheck.bind(this)
//     this.filterOnChange = this.filterOnChange.bind(this)

//     this.state = {
//       src_lists: [
//         '../../json/api_catalog_data_catalog_digital_objects.json',
//         '../../json/api_queue_usertasks.json',
//         '../../json/api.json',
//         '../../json/array.json',
//       ],
//       src: '../../json/api_catalog_data_catalog_digital_objects.json',
//       error: null,
//       isLoaded: false,
//       jsonData: [],
//       searchPath: '',
//       searchValue: '',
//       searchDelim: '',
//       searchResults: '',
//       filterVal: '',
//     }
//   }

//   componentDidMount() {
//     let url = this.state.src
//     this.setSrc(url)
//   }

//   handleSelect(event: any) {
//     let url = event.target.value
//     this.setSrc(url)
//   }

//   setSrc(url: string) {
//     fetch(url)
//       .then(result => result.json())
//       .then(data => {
//         this.setState({ src: url, jsonData: data, isLoaded: true })
//       })
//   }

//   searchClick(event: any) {
//     let {
//       jsonData,
//       searchPath,
//       searchDelim,
//       searchValue,
//       filterVal,
//     } = this.state
//     let delim = searchDelim

//     //Do nothing if length is 0
//     if (searchPath.length == 0) {
//       return
//     }

//     //If no delim was entered, delim is space
//     if (searchDelim.length == 0) {
//       delim = ' '
//     }

//     //Split the search query by the delimiter
//     let nodePath = searchPath.split(delim)

//     //Array case
//     if (R.pathSatisfies(R.is(Array), [nodePath[0]], jsonData)) {
//       if (searchValue === '') {
//         let result = JSON.stringify(R.path(nodePath, jsonData))
//         this.setState({ searchResults: result })
//       } else {
//         //Remove first argument of path so pathEq works
//         let newPath = nodePath.slice(1, nodePath.length)
//         let isEqualVal = R.pathEq(newPath, searchValue)
//         let results = R.filter(isEqualVal, jsonData.results)
//         let stringResult = JSON.stringify(results)
//         console.log(results)

//         //Farther filter this result
//         if (filterVal != '') {
//           stringResult = ''
//           for (var i = 0; i < results.length; ++i) {
//             stringResult = stringResult + R.path([filterVal], results[i])
//           }
//         }
//         this.setState({ searchResults: stringResult })
//       }
//     } else {
//       //If nothing was entered to compare result
//       if (searchValue === '') {
//         let result = JSON.stringify(R.path(nodePath, jsonData))
//         this.setState({ searchResults: result })
//       }
//       //Compare against the value
//       else {
//         if (R.path(nodePath, jsonData) === searchValue) {
//           this.setState({ searchResults: 'true' })
//         } else {
//           this.setState({ searchResults: 'false' })
//         }
//       }
//     }
//   }

//   //Update the path input
//   searchOnChange(event: any) {
//     //Dont allow space as first character
//     if (this.state.searchPath.length == 0) {
//       if (event.target.value != ' ') {
//         this.setState({ searchPath: event.target.value })
//       }
//     } else {
//       this.setState({ searchPath: event.target.value })
//     }
//   }

//   //Update the delim input
//   delimOnChange(event: any) {
//     this.setState({ searchDelim: event.target.value })
//   }

//   //Update the value input
//   searchValOnChange(event: any) {
//     let value = event.target.value
//     //if the value is a boolean value(true or false) store it as a boolean
//     if (value === 'true' || value === 'false') {
//       value = value === 'true' ? true : false
//     } else if (!isNaN(Number(value)) && value !== '') {
//       value = Number(value)
//     }
//     this.setState({ searchValue: value })
//   }

//   filterOnChange(event: any) {
//     let value = event.target.value
//     this.setState({ filterVal: value })
//   }

//   handleCheck(event: any) {
//     document.getElementById('')
//   }

//   render() {
//     let { src_lists, isLoaded, searchResults } = this.state
//     if (!isLoaded) {
//       return <div>Loading...</div>
//     } else {
//       return (
//         <Fragment>
//           <Navigation />
//           <Card>
//             <CardContent className={joinNames(column, alignCenter)}>
//               <SearchForm />
//               <div>
//                 <input id="custom_src_input" disabled type="text" />
//                 <input
//                   type="checkbox"
//                   id="custom_src_check"
//                   name="custom_src_check"
//                   onClick={this.handleCheck}
//                 />
//               </div>
//             </CardContent>

//             <CardContent className={joinNames(column, alignCenter)}>
//               <select value={this.state.src} onChange={this.handleSelect}>
//                 {src_lists.map((item: any) => (
//                   <option key={item}>{item}</option>
//                 ))}
//               </select>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className={joinNames(column, alignCenter)}>
//               <div>
//                 <label>Paths</label>
//                 <input
//                   type="text"
//                   name="args_input"
//                   value={this.state.searchPath}
//                   onChange={this.searchOnChange}
//                 />
//               </div>
//               <div>
//                 <label>Delim</label>
//                 <input
//                   type="text"
//                   name="delim"
//                   value={this.state.searchDelim}
//                   onChange={this.delimOnChange}
//                 />
//               </div>
//               <div>
//                 <label>Value</label>
//                 <input
//                   type="text"
//                   name="value"
//                   onChange={this.searchValOnChange}
//                 />
//               </div>
//               <div>
//                 <label>
//                   <label>Filter</label>
//                   <input
//                     type="text"
//                     name="value"
//                     onChange={this.filterOnChange}
//                   />
//                 </label>
//               </div>
//             </CardContent>

//             <CardContent className={joinNames(column, alignCenter)}>
//               <input type="submit" value="Search" onClick={this.searchClick} />
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent>
//               <div id="search_results">
//                 Results:
//                 {searchResults}
//               </div>
//             </CardContent>
//           </Card>
//         </Fragment>
//       )
//     }
//   }
// }
