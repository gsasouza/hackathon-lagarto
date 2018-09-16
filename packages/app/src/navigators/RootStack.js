import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import MapTabs from './MapTabs';
import withSnackbar from '../hoc/withSidebar';

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 25px;
  padding-left: 10px;
  padding-bottom: 10px;
  background-color: #4a56b8;
`;

const IconWrapper = styled.View`
  align-self: flex-start;
`;

const Header = withSnackbar(
  (props) => {
    const { toggleSidebar } = props;
    return (
      <HeaderWrapper>
        <TouchableOpacity onPress={() => toggleSidebar()}>
          <IconWrapper>
            <Ionicons name="md-menu" size={36} color={'white'} />
          </IconWrapper>
        </TouchableOpacity>
        <View />
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
