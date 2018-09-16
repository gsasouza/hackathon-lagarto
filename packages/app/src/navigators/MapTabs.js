import {createBottomTabNavigator} from 'react-navigation';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import React from 'react';

import Map from '../components/Map';
import EventList from '../screens/events/EventList';
import PathList from '../screens/paths/PathList';


export default createBottomTabNavigator(
  {
    Mapa: Map,
    // Eventos: EventList,
    Rotas: PathList,
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
