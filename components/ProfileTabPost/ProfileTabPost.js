import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import style from './style';

const ProfileTabPost = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.ProfileTabPostContainer}>
      <View style={style.imagePost}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={[style.imagePost, style.newImages]}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={[style.imagePost, style.newImages]}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={[style.imagePost, style.newImages, style.lastImages]}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabPost;
