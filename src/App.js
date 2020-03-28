import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld'
import Bomb from './Bomb'
import RouletteGun from './RouletteGun.js'

class App extends React.Component {
  state = {
    who: `World`,
    count: 0,
    chamber: 8,
    spinningTheChamber: false
  }
  //functions for HelloWorld
  onClick = event => {
    this.setState({
      who: event.target.value
    })
  }

  //functions for bomb.js
  componentDidMount(){
    if (this.state.count >= 9){
      this.setState({
        count: 0,
      })
    } else {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
      console.log(this.state.count)
    }, 1000)
  }
}

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  //functions for Roulette
  clickHandle = event => {
    let randChamber = Math.ceil(Math.random()*8)
    this.setState({
      spinningTheChamber: !this.state.spinningTheChamber
    })
    this.timeout = setTimeout(() => {
      this.setState({
        spinningTheChamber: !this.state.spinningTheChamber
      })
    }, 8000)
    console.log(this.state.spinningTheChamber)
  }

  render(){
    return (
      <div className="App">
        <HelloWorld who={this.state.who} />
        <Bomb count = {this.state.count} />
        <RouletteGun clickHandle={this.clickHandle} chamber={this.state.chamber} spinning={this.state.spinningTheChamber} />
      </div>
    )
  }
}

export default App;
