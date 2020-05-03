import * as R from 'ramda'

export function getResults(searchParams: any, jsonData: any) {
  //Split the path we want to find by the delim
  const nodePath = searchParams.path.split(
    searchParams.delim.length === 0 ? ' ' : searchParams.delim,
  )
  let searchValue: string | boolean | number = getTypeValue(searchParams.value)
  const filterVal = searchParams.filterBy
  //Check if the first path is array. If true, return a list
  if (R.pathSatisfies(R.is(Array), [nodePath[0]], jsonData)) {
    let resultArray: string[] = []
    //No value to compare against so return the array
    if (searchValue === '' && nodePath.length === 1) {
      //Convert the results we found to json obj
      jsonData[nodePath[0]].map((item: string) => {
        resultArray.push(JSON.stringify(item))
      })

      return resultArray
    } else {
      //Remove first argument of path so pathEq works
      let newPath = nodePath.slice(1, nodePath.length)
      let isTrue = R.pathEq(newPath, searchValue)
      let results = R.filter(isTrue, jsonData[nodePath[0]])
      // If filter was provided
      if (filterVal !== '') {
        results.map((item: object) => {
          resultArray.push(JSON.stringify(R.path([filterVal], item)))
        })
      } else {
        results.map((item: string) => {
          resultArray.push(JSON.stringify(item))
        })
      }
      return resultArray
    }
  }
  //Non array case. Either retrieve object value or compare value
  else {
    const result = R.path(nodePath, jsonData)
    if (searchValue === '') {
      return [result]
    } else {
      if (result === searchValue) {
        return ['true']
      } else {
        return ['false']
      }
    }
  }
}

function getTypeValue(value: string | boolean | number) {
  if (value === 'true' || value === 'false') {
    value = value === 'true' ? true : false
  } else if (!isNaN(Number(value)) && value !== '') {
    value = Number(value)
  }
  return value
}
