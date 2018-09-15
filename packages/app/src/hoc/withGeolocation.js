import * as React from 'react';

import GeolocationContext from '../context/GeolocationContext';

export default function withGeolocation(WrappedComponent) {
  return (props) => (
    <GeolocationContext.Consumer>
      {({ latitude, longitude, error }) => {
        return <WrappedComponent key={latitude} {...props} error={error} latitude={latitude} longitude={longitude}/>
      }}
    </GeolocationContext.Consumer>
  );
}
