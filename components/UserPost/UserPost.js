import React from 'react';
import propTypes from 'prop-types';
import {View, Text, Image, Pressable} from 'react-native';
import style from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import UserImage from '../UserImage/UserImage';

const UserPost = prop => {
  return (
    <View style={style.postContainer}>
      <View style={style.postHeader}>
        <View style={style.userInformation}>
          <UserImage />
          <View style={style.userPostInformation}>
            <Text style={style.userName}>
              {prop.firstName} {prop.lastName}
            </Text>
            <Text style={style.userLocation}>{prop.location}</Text>
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={22} />
        </Pressable>
      </View>
      <View style={style.postImage}>
        <Image
          resizeMode={'cover'}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
      <View style={style.info}>
        <Pressable style={style.likes}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.numbers}>{prop.likes}</Text>
        </Pressable>
        <Pressable style={style.comments}>
          <FontAwesomeIcon icon={faComment} color="#79869F" />
          <Text style={style.numbers}>{prop.comments}</Text>
        </Pressable>
        <Pressable style={style.bookmarks}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={style.numbers}>{prop.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

UserPost.prototype = {
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  likes: propTypes.number.isRequired,
  comments: propTypes.number.isRequired,
  bookmarks: propTypes.number.isRequired,
};

export default UserPost;
