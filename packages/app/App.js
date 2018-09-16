import React from 'react';

import GeolocationProvider from './src/components/common/GeolocationProvider';

import Main from './src/router/Main';

export default class App extends React.Component {

  state = {
    isReady: false
  };

  componentWillMount() {
    this.loadFonts();
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {

    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <GeolocationProvider>
        <Main/>
      </GeolocationProvider>
    );
  }
}
