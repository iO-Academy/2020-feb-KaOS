import React from 'react'
import "./Clock.css"

class Clock extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="DigitalClock">
        {this.state.date.toLocaleTimeString()}
        </div>
    )
    }
}

export default Clock;
