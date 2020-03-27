import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        faces: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props);

        this.state = { 
            die1: "",
            die2: ""
        }

        this.roll = this.roll.bind(this);
    }

    roll() {
        const face1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        const face2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        this.setState({die1: face1, die2: face2});
    }

    render() {
        return(
            <div className="RollDice">
                <Die face={this.state.die1}/>
                <Die face={this.state.die2}/>
                <button onClick={this.roll}>Roll dice!</button>
            </div>
        )
    }
}

export default RollDice;