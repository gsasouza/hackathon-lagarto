import * as React from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Column } from 'components';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
class Dashboard extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isSidebarOpen: true,
        };
        this.toggleSidebar = () => this.setState(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen }));
    }
    render() {
        const { isSidebarOpen } = this.state;
        return (React.createElement(Column, null,
            React.createElement(Header, { toggleSidebar: this.toggleSidebar }),
            React.createElement(Sidebar, { isOpen: isSidebarOpen }),
            React.createElement(Switch, null,
                React.createElement(Route, { path: '/', exact: true, render: () => React.createElement("div", null) }))));
    }
}
export default Dashboard;
//# sourceMappingURL=Dashboard.js.map