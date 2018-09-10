import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../../screens/Dashboard';
const AppRouter = () => (React.createElement(BrowserRouter, null,
    React.createElement(Switch, null,
        React.createElement(Route, { path: '/', exact: false, render: (props) => React.createElement(Dashboard, Object.assign({}, props)) }))));
export default AppRouter;
//# sourceMappingURL=AppRouter.js.map