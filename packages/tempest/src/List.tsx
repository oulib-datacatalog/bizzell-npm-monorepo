import React from 'react'

interface ListProps {}

export class List extends React.Component<ListProps> {
  render() {
    const list = [{ title: ' First Element' }, { title: 'Second Element' }]
    const listItems = list.map(d => <li key={d.title}>{d.title}</li>)

    return <div>{listItems}</div>
  }
}
