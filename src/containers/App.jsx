import React, { Component } from "react";
import ReactDOM from "react-dom";
import './App.less'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>scheduler</div>
        );
    }
}
export default App;

ReactDOM.render(<App />, document.getElementById("root"))