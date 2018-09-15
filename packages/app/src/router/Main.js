import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text as NBText } from 'native-base';
import Map from '../components/Map';
import EventList from '../screens/events/EventList';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Mapa: Map,
    Eventos: EventList,
    Rotas: SettingsScreen,
  },
  {
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigation.state.index === 0}
              onPress={() => props.navigation.navigate("Mapa")}>
              <Icon name="map" />
              <NBText>Mapas</NBText>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("Eventos")}>
              <Icon name="list" />
              <NBText>Eventos</NBText>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate("Rotas")}>
              <Icon name="navigate" />
              <NBText>Caminhos</NBText>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
    tabBarPosition: "bottom",
    animationEnabled: true,
  }
);

export default class MainRouter extends React.Component {

  state = {
    isLoading: true
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    return this.setState({ isLoading: false }, () => console.log('here'));
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <ActivityIndicator size="large"/> : <TabNavigator {...this.props} />
  }
}
