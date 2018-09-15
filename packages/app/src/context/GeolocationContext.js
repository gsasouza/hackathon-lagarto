import * as React from 'react';

const GeolocationContext = React.createContext({
  latitude: null,
  longitude: null,
  error: null
});

export default GeolocationContext;
