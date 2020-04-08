import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css'

class App extends Component {
  state = {
    enteredName: '',
    enteredAge: '',
    enteredCity: '',
    // saved user information
    user: {
      name: '',
      age: '',
      city: '',
    }
  }

  changeName = (event) => {
    console.log('Entered NAME');
    this.setState({
      name: event.target.value
    });
  }

  changeAge = (event) => {
    console.log('Entered AGE');
    this.setState({
      age: event.target.value
    });
  }

  changeCity = (event) => {
    console.log('Entered CITY');
    this.setState({
      city: event.target.value
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
            onChange={this.changeName}
          />
          <input
            type="number"
            placeholder="Age..."
            name="age"
            required
            onChange={this.changeAge}
          />
          <input
            type="text"
            placeholder="City..."
            name="city"
            required
            onChange={this.changeCity}
          />

          <button>Submit</button>
        </form>

        <div className="container">
          {/* this.state.user.name !== '' && userMessage */}
          {userMessage}
        </div>
      </div>
    );
  }
}

export default App;
