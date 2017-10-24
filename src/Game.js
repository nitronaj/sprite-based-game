import React from 'react';
import './Game.css';

import Pingball from './components/Pongball/Pongball';

class Game extends React.Component {
  getPingball() {
    console.log(this.props)
    const x = Math.round(Math.random() * this.props.w);
    const y = Math.round(Math.random() * this.props.h);
    const vx = Math.round(Math.random() * 50);
    const vy = Math.round(Math.random() * 50);
    return (<Pingball w={this.props.w} h={this.props.h} x={x} y={y} vx={vx} vy={vy}/>);
  }

  render() {
    const style = {
      width: this.props.w + 'px',
      height: this.props.h + 'px'
    }

    const pingballList = this.getPingball();
    return(
      <div className="game-container" style={style}>
        {pingballList}
      </div>
    )
  }
}

export default Game;
