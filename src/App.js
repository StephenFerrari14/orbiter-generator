import React from 'react';
import GravityBounds from "./components/GravityBounds"
import { getRandomInt } from "./helpers"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rings: getRandomInt(4) + 1,
      speedMax: 30,
      stroke: 10,
      invert: false
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    if (this.state.invert) {
      document.body.style = 'background: black';
    } else {
      document.body.style = 'background: white';
    }
    return (
      <div style={{
        width: '100%',
        boxSizing: 'border-box',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '24px',
        paddingRight: '24px',
        maxWidth: '600px'
      }}>
        <form>
          Rings: <input value={this.state.rings} onChange={this.handleChange} name="rings"></input>
          Stroke: <input value={this.state.stroke} onChange={this.handleChange} name="stroke"></input>
          Speed Max: <input value={this.state.speedMax} onChange={this.handleChange} name="speedMax"></input>
          Invert: <input type="checkbox" value={this.state.invert} onChange={this.handleChange} name="invert"></input>
        </form>
        <GravityBounds
          rings={Number(this.state.rings)}
          invert={!!this.state.invert}
          speedMax={Number(this.state.speedMax)}
        ></GravityBounds>
      </div>
    );
  }
}
