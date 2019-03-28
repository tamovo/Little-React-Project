import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  /*
  When a user selects a new dropdown item, it will invoke changeName,
  but it won't pass the correct argument! 
  Instead of passing a new name, it will pass an event object, as all event listeners do.
  This is a common problem when passing down an event handler in React!
  The solution is to define another function.


*/
  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);