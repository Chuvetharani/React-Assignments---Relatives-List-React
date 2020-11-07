import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const list = ["Selvam", "Kumari", "Sakthi", "Siva", "Adhi", "Bhuvi"];
    return (
      <div id="main">
        <ol key="relativeList">
          {list.map((ele, index) => (
            <li key={`relativeListItem${index + 1}`}>{ele}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;