import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        faces: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props);

        this.state = { 
            die1: "one",
            die2: "one",
            isRolling: false
        }

        this.roll = this.roll.bind(this);
    }

    roll() {
        const face1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        const face2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        this.setState({ die1: face1, die2: face2, isRolling: true });
        setTimeout(() => this.setState({ isRolling: false }), 1000);
    }

    render() {
        return(
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} rolling={this.state.isRolling} />
                    <Die face={this.state.die2} rolling={this.state.isRolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>{this.state.isRolling ? 'Rolling...' : 'Roll dice!'}</button>
            </div>
        )
    }
}

export default RollDice;