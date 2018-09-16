import * as React from 'react';

import FilterContext from '../context/FilterContext';

export default function withFilter(WrappedComponent) {
  return (props) => (
    <FilterContext.Consumer>
      {({ build, path, event }) => {
        console.log({ build, path, event })
        return <WrappedComponent {...props} build={build} path={path} event={event}/>
      }}
    </FilterContext.Consumer>
  );
}
