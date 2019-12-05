/* BUILDING FRONT-END APPLICATIONS WITH REACT
Random Color Picker
In this project, we’ll build a program that helps designers think of new color schemes.

Our program will set the screen’s background to a random color. Clicking a button will refresh to a new, random color. Random generators are a well-known tool for breaking a creative rut.

Let’s get started! */

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [255, 255, 0] };
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }
  
  handleClick() {
    this.setState({color: this.chooseColor()});
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);