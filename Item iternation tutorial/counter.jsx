//import react and the component class of react module.
//using simple react snippets for shortcut
//typ the shortcut and press tab.
import React, { Component } from "react";

//to escape multi-link input, press esc.
class Counter extends Component {
  //the state is displaying all the data that we need
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  //to change css style.
  //reference it in  span styles
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  render() {
    //another div is nescessary for putting both h1 and button to render.
    //If you don't want to have another div inside the div='root' use React.Fragment
    //for multi-cursor editing, click the word highlighted and press cmd+D for selected text.
    //this.state.count, this object of the state and the count value.

    //span tag can be used inside the p tag. it iis difference as the div but similiar funtion,
    //className should be used instead of class because it is an reserved keyword in javascript.
    return (
      <div>
        {/* example to comment */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {/* using backet for using it dynammicly
        using a string (tag) to map with javascript object
        */}
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  } //render ends

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //to reference the count is this.state
    const { count } = this.state;

    //===	equal value and equal type
    //if count =0, the value = "Zero" else it has the count value.
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
