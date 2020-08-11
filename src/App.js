import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
//import styled from 'styled-components';
import Person from './Person/Person';

/*const StyleButton = styled.button`
  background-color: ${props=>props.isShowPerson?'red':'green'};
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: ${props=>props.isShowPerson?'salmon':'lightgreen'};
  }
`;*/

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Max", age: "20" },
      { id: "2", name: "Medha", age: "26" },
      { id: "3", name: "Sankalp", age: "21" }
    ],
    showPersons: false
  }

  toggleShowPersons = () => {
    const doShow = this.state.showPersons;
    this.setState({
      showPersons: !doShow
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(eachPerson => {
      return (eachPerson.id === personId);
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  };

  render() {
    const btnStyle = {
      backgroundColor: 'red',
      border: '1px solid black',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'salmon'
      }
    };

    //class names from App.css
    const personCSSClasses = [];
    if (this.state.persons.length <= 2)
      personCSSClasses.push('colorRed'); //['red']

    if (this.state.persons.length <= 1)
      personCSSClasses.push('bold'); //['red', 'bold']

    let showPersonsDetails = null;
    if (this.state.showPersons === true) {
      showPersonsDetails = (
        <div>
          {this.state.persons.map((eachPerson, index) => {
            return <Person classes={personCSSClasses.join(' ')}
              key={eachPerson.id}
              name={eachPerson.name}
              age={eachPerson.age}
              onclick={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.changeNameHandler(event, eachPerson.id)} />
          })}
        </div>
      );

      btnStyle.backgroundColor = 'green';
      btnStyle[':hover'] = {
        backgroundColor: 'lightgreen'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello Guys!!</h1>
          {/* </*StyleButton*/ }
          <button
            style={btnStyle} 
            // isShowPerson={this.state.showPersons}
            onClick={this.toggleShowPersons}>
            Change Name n' Age
          </button>
         {/* </StyleButton> */}
          {showPersonsDetails}
        </div>
     </StyleRoot> 
    );
  }
}

export default Radium(App);
//export default App;
