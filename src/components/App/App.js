import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'

class App extends Component {
  state = {
    // is to mirror the user data structure
    enteredUser: {
      name: '',
      age: '',
      city: '',
    },
    // enteredName: '',
    // enteredAge: '',
    // enteredCity: '',

    // saved user information
    user: {
      name: '',
      age: '',
      city: '',
    }
  }

  // changeName = (event) => {
  //   console.log('Entered NAME');
  //   this.setState({
  //     enteredUser: {
  //       ...this.state.enteredUser,
  //       name: event.target.value
  //     },
  //     // enteredName: event.target.value
  //   });
  // }

  // changeAge = (event) => {
  //   console.log('Entered AGE');
  //   this.setState({
  //     enteredUser: {
  //       ...this.state.enteredUser,
  //       age: event.target.value
  //     },
  //     // enteredAge: event.target.value
  //   });
  // }

  // changeCity = (event) => {
  //   console.log('Entered CITY');
  //   this.setState({
  //     enteredUser: {
  //       ...this.state.enteredUser,
  //       city: event.target.value
  //     },
  //     // enteredCity: event.target.value
  //   });
  // }

  changeUser(event, propertyKey) {
    // propertyKey is one of the following:
    // - 'name'
    // - 'age'
    // - 'city'
    this.setState({
      enteredUser: {
        ...this.state.enteredUser,
        [propertyKey]: event.target.value
      },
    });
  }

  userInfoSubmit = (event) => {
    event.preventDefault();
    console.log('Entered User', this.state.enteredUser);

    this.setState({
      user: {
        ...this.state.enteredUser,
      }
    });
  }

  render() {
    let userMessage = (
      <p>
        {this.state.user.name} is {this.state.user.age} years old.
        Currently living in {this.state.user.city}
      </p>
    );
    const enteredMessage = (
      <ul>
        <li>Name: {this.state.enteredUser.name}</li>
        <li>Age: {this.state.enteredUser.age}</li>
        <li>City: {this.state.enteredUser.city}</li>
      </ul>
    );

    if (!this.state.user.name || !this.state.user.age) {
      userMessage = null;
    }

    return (
      <div>
        <Header />

        <form
          className="container"
          onSubmit={this.userInfoSubmit}
        >
          <input
            type="text"
            placeholder="Name..."
            name="name"
            required
            onChange={(event) => this.changeUser(event, 'name')}
          />
          <input
            type="number"
            placeholder="Age..."
            name="age"
            required
            onChange={(event) => this.changeUser(event, 'age')}
          />
          <input
            type="text"
            placeholder="City..."
            name="city"
            required
            onChange={(event) => this.changeUser(event, 'city')}
          />

          <button>Submit</button>
        </form>

        <div className="container">
          {enteredMessage}
          {/* this.state.user.name !== '' && userMessage */}
          {userMessage}
        </div>
      </div>
    );
  }
}

export default App;
