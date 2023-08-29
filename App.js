import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
} from 'react-native';
import Title from './components/Title/Title';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const data = [
    {firstName: 'Ellie', id: 1},
    {firstName: 'Joel', id: 2},
    {firstName: 'Tommy', id: 3},
    {firstName: 'Dina', id: 4},
    {firstName: 'Jessie', id: 5},
    {firstName: 'Sarah', id: 6},
    {firstName: 'Abby', id: 7},
    {firstName: 'Bill', id: 8},
    {firstName: 'Aseem', id: 9},
    {firstName: 'Maria', id: 10},
  ];

  const posts = [
    {
      firstName: 'Joel',
      lastName: 'Miller',
      location: 'Jackson County, Wyoming',
      likes: 1200,
      comments: 50,
      bookmarks: 100,
      id: 1,
    },
    {
      firstName: 'Tommy',
      lastName: 'Miller',
      location: 'Jackson County, Wyoming',
      likes: 987,
      comments: 65,
      bookmarks: 105,
      id: 2,
    },
    {
      firstName: 'Abby',
      lastName: 'Anderson',
      location: 'Seattle, Washington DC',
      likes: 450,
      comments: 10,
      bookmarks: 80,
      id: 3,
    },
    {
      firstName: 'Aseem',
      lastName: 'Saini',
      location: 'New York, New York City',
      likes: 1250,
      comments: 510,
      bookmarks: 180,
      id: 4,
    },
    {
      firstName: 'Ellie',
      lastName: 'Williams',
      location: 'Jackson County, Wyoming',
      likes: 250,
      comments: 14,
      bookmarks: 60,
      id: 5,
    },
  ];

  const pageSize = 4;
  const pageSizePosts = 2;

  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      setScreenData(result.screen);
    });
  }, []);

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex > data.length) {
      return [];
    }

    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }

    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={style.header}>
              <Title title={"Let's Explore"} />
              <Pressable
                style={style.messageIcon}
                onPress={() => console.log('Message Pressed!')}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={'#CACDDE'}
                  size={20}
                />
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </Pressable>
            </View>
            <View style={style.userStoriesContainer}>
              <FlatList
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderedData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize),
                    ]);
                  }
                  setIsLoading(false);
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={renderedData}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          if (!isLoadingPosts) {
            setIsLoadingPosts(true);
            setRenderedDataPosts(prev => [
              ...prev,
              ...pagination(posts, postPageNumber + 1, pageSizePosts, true),
            ]);
          }
          setIsLoadingPosts(false);
        }}
        showsVerticalScrollIndicator={false}
        data={renderedDataPosts}
        renderItem={({item}) => (
          <View style={style.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              location={item.location}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
