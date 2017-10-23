import React, { Component } from 'react';


class Pongball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      vx: props.vx,
      vy: props.vy
    }
  }

  tick() {
    this.setState(prevState => ({
      x: prevState.x + prevState.vx,
      y: prevState.y + prevState.vy
    }));

    if (this.state.x < 0 || this.state.x > this.props.w - 10) {
      this.setState(prevState => ({
        vx: prevState.vx * -1
      }));
    }

    if (this.state.y < 0 || this.state.y > this.props.h - 10) {
      this.setState(prevState => ({
        vy: prevState.vy * -1
      }));
    }

    console.log(this.state)

  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const style = {
      width: '1rem',
      height: '1rem',
      backgroundColor: '#FF0000',
      position: 'absolute',
      top: this.state.y,
      left: this.state.x
    }
    return (
      <div style={style}></div>
    );
  }
}

export default Pongball;