import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  componentDidMount() {
    // Similar to useEffect with an empty dependency array
    console.log('Component did  mounted exicuted ');
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    // Similar to useEffect with a dependency array
    if (prevState.count !== this.state.count) {
        console.log('componentDidUpdate method is exicuted ');
      console.log('Count  updated');
 
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  componentWillUnmount() {
    // Cleanup similar to useEffect's cleanup function
    console.log('Component will unmount method is exicuted ');
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me for the Increment 
        </button>
        <br></br>
        <br></br> 
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Click me for the Dcrement 
        </button>
      </div>
    );
  }
}

export default MyComponent;
