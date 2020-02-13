import { h, render, Component } from "preact";

class List extends Component {
  render() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    );
  }
}

render(<List />, document.getElementById("list"));