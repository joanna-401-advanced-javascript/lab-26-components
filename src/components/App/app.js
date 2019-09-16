import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './app.scss';

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
    let changes = 'unbolded';
    if(this.state.counter < 0){
      changes = 'bolded';
    }

    return (
      <div>
        <h4 className={changes}>Counter: {this.state.counter}</h4>
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
