import React from "react";
import App from './Mobile-navigation.js';
import Nav from './Tablet-navigation.js';

interface ResponsiveState {
  width: number;
  height: number;
}

export default class Responsive extends React.Component<{}, ResponsiveState> {
  constructor(props: {}) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    if (this.state.width <= 500 && this.state.height <= 900) {
      return (
        <App/>
		  );  
    } else if (this.state.height <= 500 && this.state.width <= 900) {
      return (
        // mobile landscape mode
        <App/>
      );
    } else if (
      this.state.width >= 500 &&
      this.state.height >= 700 &&
      this.state.width <= 1400 &&
      this.state.height <= 1400
    ) {
      return (
        // Tablet landscape mode
        <Nav/>
      );
    }
     else {
      return (
        //This is a laptop
        <div className="menu-navigation-laptop">
          <div className="title-laptop">Placeholder</div>
          <ul>
            <li>
              <a href="#home">Contact</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">About</a>
            </li>
          </ul>
        </div>
      );
    }
  }
}
