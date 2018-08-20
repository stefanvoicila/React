import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: "Phteven", age: 21 },
      { id: 'asdf', name: "KEKEKE", age: 69 },
      { id: 'asdfg', name: "PLS", age: 5}
    ],
    otherstate: "some other value",
    showPersons: false
  }

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

nameChangedHandler = (event, id) => {

  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( {persons:persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}


  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
          />
        {persons}
      </div>
    );
  }
}

export default App;
