import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/main';
import style from './style';
import {ScrollView} from 'react-native-gesture-handler';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
        <View style={style.imageContainer}>
          <View style={style.imageContent}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={style.image}
            />
          </View>
        </View>
        <View style={style.textContainer}>
          <Text style={style.profileName}>Joel Miller</Text>
        </View>
        <View style={style.profileStatsContainer}>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.numberStat}>45</Text>
            <Text style={style.statDefinition}>Following</Text>
          </View>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.numberStat}>30M</Text>
            <Text style={style.statDefinition}>Followers</Text>
          </View>
          <View style={style.singleStatContainer}>
            <Text style={style.numberStat}>100</Text>
            <Text style={style.statDefinition}>Posts</Text>
          </View>
        </View>
        <View style={style.border} />
        <View style={{height: '100%'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
