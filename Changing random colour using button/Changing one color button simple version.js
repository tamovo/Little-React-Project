
import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
this.changeColor = this.changeColor.bind(this);
//Have to use bind method to refer this.changeColor
  }
      
  changeColor() {
   // const newColor = this.state.color == green ? yellow : green;
   //By replacing the color to newColor, it changes the color everytime you click it 
    this.setState({ color: yellow });
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

