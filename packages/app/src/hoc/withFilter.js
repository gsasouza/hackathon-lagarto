import * as React from 'react';

import FilterContext from '../context/FilterContext';

export default function withFilter(WrappedComponent) {
  return (props) => (
    <FilterContext.Consumer>
      {({ build, path, event, setBuild, setPath, setEvent }) => {
        const updater = {
          build: 13,
          path: 7,
          event: 17,
        };
        const getValue = (value) => {
          return (value && updater[value]) || 0;
        };

        return <WrappedComponent
          key={getValue(build) + getValue(path) + getValue(event)}
          {...props}
          build={build}
          path={path}
          event={event}
          setBuild={setBuild}
          setPath={setPath}
          setEvent={setEvent}
        />
      }}
    </FilterContext.Consumer>
  );
}
