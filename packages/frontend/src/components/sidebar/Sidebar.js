import * as React from 'react';
import DrawerMUI from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import styled from 'styled-components';
import items from './items';
import SidebarItem from './SidebarItem';
const Drawer = styled(DrawerMUI) `
  transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
  > div {
    z-index: -1;
    margin-top: 64px;
    width: ${props => props.open ? 250 : 0}px;
  }
  position: relative;
  white-space: nowrap;
`;
class Sidebar extends React.Component {
    render() {
        const { isOpen } = this.props;
        return (React.createElement(Drawer, { variant: "permanent", open: isOpen },
            React.createElement(MenuList, null, items.map(({ label, icon, path }) => React.createElement(SidebarItem, { key: label, label: label, path: path },
                " ",
                icon,
                " ")))));
    }
}
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map