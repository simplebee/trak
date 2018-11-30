import propTypes from 'prop-types';

export const habitPropTypes = propTypes.shape({
  _id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  startDate: propTypes.string.isRequired,
  endDate: propTypes.string.isRequired,
  goalValue: propTypes.number.isRequired,
  frequency: propTypes.string.isRequired,
  datapoints: propTypes.arrayOf(propTypes.string).isRequired
}).isRequired;

export const datapointPropTypes = propTypes.shape({
  _id: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  value: propTypes.number.isRequired
}).isRequired;

export const habitsPropTypes = propTypes.shape({
  entities: propTypes.shape({
    habits: propTypes.objectOf(habitPropTypes).isRequired,
    datapoints: propTypes.objectOf(datapointPropTypes).isRequired
  }).isRequired
}).isRequired;
