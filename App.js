import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  const data = [
    {firstName: 'Ellie', id: 1},
    {firstName: 'Joel', id: 2},
    {firstName: 'Tommy', id: 3},
    {firstName: 'Dina', id: 4},
    {firstName: 'Jessie', id: 5},
    {firstName: 'Sarah', id: 6},
    {firstName: 'Abby', id: 7},
  ];
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, isRenderedData] = useState([]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title={"Let's Explore"} />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={style.userStoriesContainer}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => <UserStory firstName={item.firstName} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
