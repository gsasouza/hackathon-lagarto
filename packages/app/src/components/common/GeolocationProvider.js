import React from 'react';
import { Location, Permissions } from 'expo';

import GeolocationContext from '../../context/GeolocationContext';

export default class GeolocationProvider extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
  };

  getPermissionState = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        error: 'Dispositivo não autorizado, favor autorizar dispositivo',
      });

      return false;
    }
    return true;
  };

  watchPosition = async () => {
    const status = await this.getPermissionState();
    if (status) {
      this.watchId = navigator.geolocation.watchPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 0, distanceFilter: 1},
      );
    }
  };

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  componentWillMount() {
    this.watchPosition();
  }
  render() {
    const { latitude, longitude, error } = this.state;

    return (
      <GeolocationContext.Provider
        value={{
          latitude,
          longitude,
          error
        }}
      >
        {this.props.children}
      </GeolocationContext.Provider>
    );
  }
}
