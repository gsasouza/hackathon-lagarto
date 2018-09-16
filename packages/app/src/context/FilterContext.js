import * as React from 'react';

const FilterContext = React.createContext({
  path: null,
  event: null,
  build: true,
  setPath: () => {},
  setEvent: () => {},
  setBuild: () => {},
});

export default FilterContext;
