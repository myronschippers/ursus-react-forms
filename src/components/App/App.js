import React, { Component } from 'react';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello Ursus',
      headingText: 'My Heading',
      pageHeading: 'React Local State',
    };

  }

  changeWords = (event) => {
    console.log('CHANGE WORDS!!!');
    // the element is represented by...
    const elementChanged = event.target;

    this.setState({
      text: elementChanged.value,
    });
  }

  alterHeading() {
    this.setState({
      headingText: 'TOTES CHANGED IT'
    });
  }

  clickMe = (event) => {
    this.alterHeading();
  }

  clickGreeting = () => {
    this.setState({
      pageHeading: 'Hey There...'
    });
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
