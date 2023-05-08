import React, { Component } from "react";
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {}
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({ 
      inputs: {...prevState.inputs, [name]: value}
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.inputs);
  }

  render() {
    return (
      <div className="App">
        <h1>EXAMPLE OF CONTROLLED FORM HANDLING</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your name:
            <input type="text" onChange={this.handleChange} name="username" />
          </label>
          <br /> <br />
          <label>
            Enter city:
            <input type="text" onChange={this.handleChange} name="city" />
          </label>
          <br /> <br />
          <select name="myCar" onChange={this.handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
          <br /> <br />
          <GrammarlyEditorPlugin clientId="client_AQxzw2sMWyyDPHVVVBGWbP">
            <textarea name="textarea" onChange={this.handleChange} />
         </GrammarlyEditorPlugin>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default FormClass;
