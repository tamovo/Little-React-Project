//import react and the component class of react module.
//using simple react snippets for shortcut
//typ the shortcut and press tab.
import React, { Component } from "react";

//to escape multi-link input, press esc.
class Counter extends Component {
  //the state is displaying all the data that we need
  state = {
    count: 0,
    /* tags: ["tag1", "tag2", "tag3"] */
    tags: []
  };
  //to change css style.
  //reference it in  span styles
  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //another div is nescessary for putting both h1 and button to render.
    //If you don't want to have another div inside the div='root' use React.Fragment
    //for multi-cursor editing, click the word highlighted and press cmd+D for selected text.
    //this.state.count, this object of the state and the count value.

    //span tag can be used inside the p tag. it iis difference as the div but similiar funtion,
    //className should be used instead of class because it is an reserved keyword in javascript.

    //javascript can use condition with a non-boolean value.
    //true && 'HI' (always true if string isn't null or any number except 0)
    // output: "HI"
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}

        {this.renderTags()}
      </div>
    );
  } //render ends
}

export default Counter;
