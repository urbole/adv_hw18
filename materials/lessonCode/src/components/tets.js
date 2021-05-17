import React, { Component } from 'react';

class Test extends Component {

  state = {
    name: 'red',
    counter: 0
  }

  changeColor = () => {
    const colorName = this.state.name;
    if (colorName === 'red') {
      this.setState({ name: 'green' });
    } else {
      this.setState({ name: 'red' });
    }
    // this.setState({ name: 'green' }, ()=> console.log(colorName));
    this.setState({ counter: this.state.counter + 1 });
  }


  render() {
    console.log(this.state.name)
    return (
      <div className="test">
        <p className={this.state.name}>Test</p>
        <p>{this.state.counter}</p>
        <button onClick={this.changeColor}>Click</button>
      </div>
    )
  }
}

export default Test;