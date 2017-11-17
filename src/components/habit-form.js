import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

function HabitForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <TextField 
          floatingLabelText="Name"
          name="name"
          value={props.name}
          onChange={props.handleChange}
        />
        <DatePicker
          floatingLabelText="Start date"
          container="inline"
          name="startDate"
          value={props.startDate}
          onChange={props.handleDatePickerChange('startDate')}
        />
        <TextField 
          floatingLabelText="Goal value"
          name="goalValue"
          type="number"
          value={props.goalValue}
          onChange={props.handleChange}
        />
        <br />
        <SelectField
          floatingLabelText="Frequency"
          name="frequency"
          value={props.frequency}
          onChange={props.handleSelectFieldChange('frequency')}
        >
          <MenuItem value={'daily'} primaryText="Per day" />
          <MenuItem value={'weekly'} primaryText="Per week" />
          <MenuItem value={'monthly'} primaryText="Per month" />
        </SelectField>
        <br />
        <RaisedButton label="Submit" type="submit" />
        <Link to={'/'}>
          <RaisedButton label="Cancel" type="button" />
        </Link>
      </div>
    </form>
  );
}

export default HabitForm;