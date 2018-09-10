import hoistStatics from 'hoist-non-react-statics';
import * as React from 'react';

import SnackbarContext, { SnackbarContextProps } from '../context/SnackbarContext';

export default function withSnackbar<P>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P | SnackbarContextProps>{
  const ConnectedSnackbar = (props: any) => {
    return (
      <SnackbarContext.Consumer>
        {({ showSnackbar }) => <WrappedComponent {...props} showSnackbar={showSnackbar} />}
      </SnackbarContext.Consumer>
    );
  };
  
  return hoistStatics(ConnectedSnackbar, WrappedComponent);
}
