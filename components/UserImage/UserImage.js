import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

const UserImage = () => {
  return (
    <View style={style.userImageContainer}>
      <Image source={require('../../assets/images/default_profile.png')} />
    </View>
  );
};

export default UserImage;
