import React, {Component} from 'react';
import './modal.scss'
import Timer from '../timer/timer';

class Modal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            target: false,
            value: '',
            date: '',
        }
        this.inputChange = this.inputChange.bind(this);
        this.dateChange = this.dateChange.bind(this);
        this.checkDate = this.checkDate.bind(this);
    }
    
    inputChange(event) {
        this.setState({
            value: event.target.value
        });
      }

    dateChange(event) {
        this.setState({
            date: event.target.value
        });
    }

    checkDate(e) {
        e.preventDefault();
        let reverse = this.state.target;
        this.setState({
            target: !reverse,
        })
    }

    render() {
        if (this.state.target) {
            return (<Timer title={this.state.value} needDate={new Date(this.state.date)}/>);
        }
        return (
            <div className="modal">
                <div className="modal__container">
                    <h1 className="modal__title">Date Counter</h1>
                    <h2 className="modal__descr">A simple and fast date counter app. It will calculate how many days, hours, minutes, seconds are left until a certain date.</h2>
                    <form onSubmit={this.checkDate} className="modal__form">
                        <label htmlFor="event">Event name</label>
                        <input 
                            type="text"
                            maxLength="20"
                            id="event" 
                            name="event"
                            value={this.state.value} 
                            onChange={this.inputChange}
                        ></input>
                        <label>Date</label>
                        <input 
                            type="date" 
                            min={new Date().toJSON().slice(0,10)} 
                            max="2099-12-31" 
                            required 
                            id="date" 
                            name="date"
                            value={this.state.date} 
                            onChange={this.dateChange}
                        ></input>

                        <button 
                            className="btn btn_submit" 
                            type="submit"
                        >Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Modal;