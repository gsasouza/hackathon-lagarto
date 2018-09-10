import * as React from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Column } from 'components';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

type Props = {}

type State = {
  isSidebarOpen: boolean
}

class Dashboard extends React.Component<Props, State> {

  state = {
    isSidebarOpen: true,
  };

  toggleSidebar = () => this.setState(({ isSidebarOpen }) => ({ isSidebarOpen: !isSidebarOpen }));

  render() {
    const { isSidebarOpen } = this.state;
    return (
      <Column>
        <Header toggleSidebar={this.toggleSidebar}/>
        <Sidebar isOpen={isSidebarOpen}/>
        <Switch>
          <Route
            path={'/'}
            exact={true}
            render={() => <div /> }
          />
        </Switch>
      </Column>
    );
  }
}

export default Dashboard;
