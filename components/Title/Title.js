import React from 'react';
import propTypes from 'prop-types';
import {Text} from 'react-native';
import style from './style';

const Title = props => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: propTypes.string.isRequired,
};

export default Title;
