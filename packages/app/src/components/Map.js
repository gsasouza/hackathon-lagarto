import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import { MapView } from 'expo';
import styled from 'styled-components';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

import withGeolocation from '../hoc/withGeolocation';

class Map extends React.Component {

  state = {
    latitude: null,
    longitude: null,
  };

  componentWillMount() {
    const { latitude, longitude } = this.props;

    this.setState({
      latitude,
      longitude
    })
  }


  render() {

    const { latitude, longitude } = this.state;

    if (!latitude || !longitude) {
      return (
        <Container>
          <ActivityIndicator size="large"/>
          <Text>
            Carregando...
          </Text>
        </Container>
      );
    }

    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        followsUserLocation
        showsMyLocationButton
        showsCompass
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.003,
        }}
      >
        <Marker coordinate={{
          latitude,
          longitude
        }} title={'Você'}/>
      </MapView>
    );
  }
}

export default withGeolocation(Map);
