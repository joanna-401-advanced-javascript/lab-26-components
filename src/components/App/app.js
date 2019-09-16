import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = e => {
    e.preventDefault();
    this.setState(previousState => ({
      counter: previousState.counter + 1,
    }));
  };

  decrementCounter = e => {
    e.preventDefault();
    this.setState(previousState => ({
      counter: previousState.counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.incrementCounter}> Click here to + 1 </button>
        <button onClick={this.decrementCounter}> Click here to - 1 </button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
