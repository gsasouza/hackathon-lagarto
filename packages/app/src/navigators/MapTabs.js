import {createBottomTabNavigator} from 'react-navigation';
import Map from '../components/Map';
import EventList from '../screens/events/EventList';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


export default createBottomTabNavigator(
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
              <Text>Mapas</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 1}
              onPress={() => props.navigation.navigate("Eventos")}>
              <Icon name="list" />
              <Text>Eventos</Text>
            </Button>
            <Button
              vertical
              active={props.navigation.state.index === 2}
              onPress={() => props.navigation.navigate("Rotas")}>
              <Icon name="navigate" />
              <Text>Caminhos</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    },
    tabBarPosition: "bottom",
    animationEnabled: true,
  }
);
