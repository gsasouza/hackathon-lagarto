import * as React from 'react';
import DrawerMUI from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import styled from 'styled-components';

import items from './items';
import SidebarItem from './SidebarItem';

const Drawer = styled(DrawerMUI)`
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  > div {
    z-index: -1;
    margin-top: 64px;
    width: ${props => props.open ? 250 : 0 }px;
  }
  position: relative;
  white-space: nowrap;
`;

type Props = {
  isOpen: boolean,
}

class Sidebar extends React.Component<Props> {
  render() {
    const { isOpen } = this.props;
    return (
      <Drawer
        variant="permanent"
        open={isOpen}
      >
        <MenuList>
          {items.map(({ label, icon, path }) => <SidebarItem key={label} label={label} path={path}> {icon} </SidebarItem>)}
        </MenuList>
      </Drawer>
    );
  }
}

export default Sidebar;
