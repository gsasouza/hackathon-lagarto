import hoistStatics from 'hoist-non-react-statics';
import * as React from 'react';
import SnackbarContext from '../context/SnackbarContext';
export default function withSnackbar(WrappedComponent) {
    const ConnectedSnackbar = (props) => {
        return (React.createElement(SnackbarContext.Consumer, null, ({ showSnackbar }) => React.createElement(WrappedComponent, Object.assign({}, props, { showSnackbar: showSnackbar }))));
    };
    return hoistStatics(ConnectedSnackbar, WrappedComponent);
}
//# sourceMappingURL=withSnackbar.js.map