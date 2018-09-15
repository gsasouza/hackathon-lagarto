import React from 'react';
import { View, Text } from 'react-native';

import Drawer from 'react-native-drawer';
import SidebarContext from '../context/SidebarContext';

const List = () => (
  <View>
    <Text>
      Here

    </Text>
  </View>
);

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
};

export default class Sidebar extends React.Component {

  state = {
    isSidebarOpen: false,
  };

  toggleSidebar = () => {

    return this.setState(({ isSidebarOpen }) => {
      console.log('sidebar', isSidebarOpen)
      return ({ isSidebarOpen: !isSidebarOpen })
    });
  };

  render () {
    const { children } = this.props;
    const { isSidebarOpen } = this.state;
    return (
      <SidebarContext.Provider
        value={{
          toggleSidebar: this.toggleSidebar,
        }}
      >
        <Drawer
          open={isSidebarOpen}
          tapToClose={true}
          openDrawerOffset={0.2} // 20% gap on the right side of drawer
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({
            main: { opacity:(2-ratio)/2 }
          })}
          content={<List/>}
        >
          { children }
        </Drawer>
      </SidebarContext.Provider>
    )
  }
}
