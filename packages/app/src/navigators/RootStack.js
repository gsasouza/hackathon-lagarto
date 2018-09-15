import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import MapTabs from './MapTabs';

import withSnackbar from '../hoc/withSidebar';
// import Map from '../components/Map';

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-top: 25px;
  padding-left: 10px;
  padding-bottom: 10px;
  background-color: #4a56b8;
`;

const IconWrapper = styled.View`
  align-self: flex-start;
`;

const HeaderTitle = styled.Text`
  align-self: center;
  color: #000;
`;

const Header = withSnackbar(
  (props) => {
    const { title = 'Teste', toggleSidebar } = props;
    console.log();
    return (
      <HeaderWrapper>
        <TouchableOpacity onPress={() => {
          console.log('touchable', props.toggleSidebar)
          return toggleSidebar()
        }}>
          <IconWrapper>
            <Ionicons name="md-menu" size={36} color={'white'} />
          </IconWrapper>
        </TouchableOpacity>
        <HeaderTitle>
          { title }
        </HeaderTitle>
      </HeaderWrapper>
    )
  }
);


export default createStackNavigator(
  {
    Mapa: {
      screen: MapTabs,
      title: 'Mapa',
      path: 'map',
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Mapa',
    navigationOptions: {
      header: Header
    }
  }
);
