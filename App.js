import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Title from './components/Title/Title';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Title title={"Let's Explore"} />
      </View>
    </SafeAreaView>
  );
};

export default App;
