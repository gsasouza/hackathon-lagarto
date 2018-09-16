import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import { MapView } from 'expo';
import styled from 'styled-components';
import { createFragmentContainer, graphql } from 'react-relay';

import { createQueryRenderer } from '../relay/createQueryRenderer';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

import withGeolocation from '../hoc/withGeolocation';
import withFilter from '../hoc/withFilter';

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
    const { query, navigation } = this.props;
    const { builds, path } = query;
    const id = navigation.state.params && navigation.state.params.id;
    console.log(path)
    console.log('id',id, !id, !!id);
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
        mapType={'hybrid'}
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
        {!id ? builds.map(({ name, mark, id }) => (
          <Marker
            key={id}
            pinColor={'#4a56b8'}
            coordinate={{
              latitude: parseFloat(mark.latitude),
              longitude: parseFloat(mark.longitude)
            }}
            title={name}
          />
        )) : null}
        {!!id ? path.marks.map(({ latitude, longitude, type, id }, index) => type === 'path' &&
          (
          <Marker
            key={id}
            pinColor={index === 4 ? '#FA5319' : '#504485'}
            coordinate={{
              latitude: parseFloat(latitude),
              longitude: parseFloat(longitude)
            }}
            title={builds.find(({ mark }) => latitude === mark.latitude && mark.longitude === longitude).name || ''}
          >
            {console.log(index)}
          </Marker>
        )) : null}
        <Marker
          coordinate={{
            latitude,
            longitude
          }}
          pinColor={'#000'}
          title={'Você'}
        />
      </MapView>
    );
  }
}

const fragment = createFragmentContainer(
  withGeolocation(
    withFilter(
      Map
    )
  ),
  {
    query: graphql`
      fragment Map_query on Query {
        builds {
          id
          name
          mark {
            latitude
            longitude
          }
        }
        path(id: "UGF0aDo1YjllMGE4OWRlNjkxNDVmYmM3NmQzNGM=") {
          marks {
            id
            latitude
            longitude
            type
          }
        }
      }
    `,
  }
);



export default createQueryRenderer(fragment,
  {
    query: graphql`
      query MapQuery {
        ...Map_query
      }
    `,
  },
  {
    queriesParams: ({ navigation }) => ({
      id: navigation.params.id,
    }),
  }
);
