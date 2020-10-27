import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    state = {timesClicked: 0}

    clickHandler = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}
