import React from 'react';
import { Provider } from 'react-redux';
import taskReducer from './store/slice';
import { configureStore } from '@reduxjs/toolkit';
import Root from './Root';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  Pressable,
  Dimensions,

} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const store = configureStore({
  reducer: {
    task: taskReducer,
  },


});
class App extends React.Component {
  render() {

    return (
      <Provider store={store}>

        <Root />

      </Provider>
    );
  }
}

export default App;
