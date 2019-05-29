import React, { Component } from "react";
import { pingStore } from '../../store/reducers/schedules'
import './App.less'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div onClick={() => pingStore()}>scheduler</div>
        );
    }
}
export default App;