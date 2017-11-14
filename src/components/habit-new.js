import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createHabit } from '../actions';
import HabitForm from './habit-form'
import moment from 'moment';

class Habit extends Component {
  
  state = {
    name: '',
    startDate: null,
    endDate: null,
    timesPerDay: '',
    frequency: 'daily',
    timesPerWeek: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDatePickerChange = (name) => (event, date) => {
    this.setState({
      [name]: date
    });
  }
  
  handleSelectFieldChange = (name) => (event, index, value) => {
    this.setState({
      [name]: value,
      timesPerWeek: ''
    });
  }

  handleSubmit = (event) => {
    const { name, startDate, endDate, timesPerDay, frequency, timesPerWeek } = this.state;
    const data = {
      name,
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
      timesPerDay: Number(timesPerDay),
      frequency,
      timesPerWeek: Number(timesPerWeek)
    }
    this.props.createHabit(data);
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <HabitForm
          {...this.state}
          handleChange={this.handleChange}
          handleDatePickerChange={this.handleDatePickerChange}
          handleSelectFieldChange={this.handleSelectFieldChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createHabit }, dispatch);
}

export default connect(null, mapDispatchToProps)(Habit);