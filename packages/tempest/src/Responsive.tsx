import React from 'react'

interface ResponsiveState {
  width: number
  height: number
}

export class Responsive extends React.Component<{}, ResponsiveState> {
  constructor(props: {}) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateWindowDimensions = this.updateWindowDimensions
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    return (
      <div>
        <h1>{this.state.height}</h1>
        <h1>{this.state.width}</h1>
      </div>
    )
  }
}
