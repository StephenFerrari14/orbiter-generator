import React, { Component } from 'react'
import OrbRing from "./OrbRing";
import { getRandomInt } from "../helpers"

export default class GravityBounds extends Component {
  render() {
    return (
      <div>
        {Array(this.props.rings).fill(1).map((ring, index) => {
          // Change to iterate from largest to smallest
          let top = 0;
          let left = 0;
          let radius = 40 + (this.props.rings * 10) - (index * 10);
          if (index !== 0) {
            top = left = 10 + 10 * (index - 1);
          }
          const spacing = {
            marginTop: `${top}px`,
            marginLeft: `${left}px`
          }
          const progress = getRandomInt(360);
          const animationTiming = getRandomInt(this.props.speedMax) / 10 + 2
          return (
            <OrbRing
              key={`ring${index}`}
              radius={radius}
              stroke={10}
              progress={progress}
              style={{ animation: `spin ${animationTiming}s linear infinite`, position: 'absolute', ...spacing }}
              invert={this.props.invert}
            ></OrbRing>
          )
        })}
      </div>
    )
  }
}