import React, { Component } from 'react';
import Modal from '../modal/modal';
import './timer.scss'

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: false,
            currentDate: new Date(),
            needDate: this.props.needDate
        }
        this.settings = this.settings.bind(this);

    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
          currentDate: new Date()
        });
    }

    settings() {
        let reverse = this.state.target;
        this.setState({
            target: !reverse,
        })
    }

    addZero(n) {
        return n < 10 ? `0${n}` : n;
    }

    render() {
        const title = this.props.title === '' ? 
              null :
              (<h2 className="timer__title">{`${this.props.title} left`}</h2>);
        const date = this.state.currentDate > this.state.needDate ? (this.state.currentDate - this.state.needDate) / 1000 :
             (this.state.needDate- this.state.currentDate) / 1000;
        const days = Math.floor(date / 3600 / 24),
              hours = Math.floor(date / 3600) % 24 - 3,
              minutes = Math.floor(date / 60) % 60,
              seconds = Math.floor(date) % 60;

        if (this.state.target) {
            return <Modal/>
        }

        return (
            <div className="timer">
                <button onClick={this.settings} className="btn btn_set">Settings</button>
                {title}
                <div className="timer__counter">
                    <div className="timer__count">
                        <p id="days">{days}</p>
                        <span>days</span>
                    </div>
                    <div className="timer__count">
                        <p id="hours">{this.addZero(hours)}</p>
                        <span>hours</span>
                    </div>
                    <div className="timer__count">
                        <p id="minutes">{this.addZero(minutes)}</p>
                        <span>minutes</span>
                    </div>
                    <div className="timer__count">
                        <p id="seconds">{this.addZero(seconds)}</p>
                        <span>seconds</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;