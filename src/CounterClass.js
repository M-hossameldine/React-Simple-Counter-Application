import React, { Component } from 'react';
import {ThemeContext} from './App';

export default class CounterClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue,
    }
  }
  
  render() {

    return(
      <ThemeContext.Consumer>
        { style => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)} >-</button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>+</button>
          </div>
        )}
      </ThemeContext.Consumer>
    

    )
  }

  changeCount = (num) => {
    this.setState( prevState => {
      return {count:prevState.count + (num * 2)}
    })
  }
}

