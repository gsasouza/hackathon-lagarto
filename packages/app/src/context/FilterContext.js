import * as React from 'react';

const FilterContext = React.createContext({
  path: null,
  event: null,
  build: null
});

export default FilterContext;
