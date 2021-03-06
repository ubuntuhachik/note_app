import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => <div style={alertStyle}>{alert.msg}</div>;

Alert.defaultProps = {
  alert: ''
};

Alert.propTypes = {
  alerts: PropTypes.string
};

const alertStyle = {
  background: 'red',
  padding: '12px',
  textAlign: 'center',
  color: 'aquamarine',
  marginBottom: '5px',
  fontSize: '20px'
};

export default Alert;
