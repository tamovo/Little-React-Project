import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  //Take the event object and return the name       
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  /*This new function should take an event object as an argument,
   extract the name that you want from that event object, and then call the event handler,
   make sure to bind this function
*/
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}