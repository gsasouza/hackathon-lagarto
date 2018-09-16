import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import RootStack from '../navigators/RootStack';
import Sidebar from '../components/Sidebar';


export default class MainRouter extends React.Component {

  state = {
    isLoading: true
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    return this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <View>
        <ActivityIndicator size="large"/>
      </View>
    ) : (
      <Sidebar>
        <RootStack />
      </Sidebar>
    )

  }
}
