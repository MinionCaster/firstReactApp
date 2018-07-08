import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    length : 0,
    text: '',
    charTable: []
  }
  

  countCharactersString = event => {
    var charTable;
    if(this.state.charTable.length === 0 ) {
      charTable = [];
    } else {
      charTable = this.state.charTable.map(el => el);
    }
    
    const length = event.target.value.length;
    const text = event.target.value;
    const char = text[length-1];
    charTable.push(char);
    this.setState({length : length, text: text, charTable: charTable} );
  }

  deleteCharHandler = charIndex => {
    const chars = [...this.state.charTable];
    chars.splice(charIndex, 1);
    this.setState({charTable: chars});
  }


  render() {
    let chars = null;
    chars = (
      this.state.charTable.map((el, index) => {
        return <CharComponent
          key={index} 
          char={el} 
          click={() => this.deleteCharHandler(index)}
        />
      })
    )
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.countCharactersString}/>
        <ValidationComponent length={this.state.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
