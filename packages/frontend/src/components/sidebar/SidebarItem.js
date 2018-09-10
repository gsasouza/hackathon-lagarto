import * as React from 'react';
import MenuItemMUI from '@material-ui/core/MenuItem';
import MenuItemIconMUI from '@material-ui/core/ListItemIcon';
import MenuItemTextMUI from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { hasMatched } from 'router-utils';
const MenuItem = styled(MenuItemMUI).attrs({}) `
  ${props => props.selected && `background-color: ${props.theme.palette.primary.main} !important;`}
  ${props => props.selected && `color: ${props.theme.palette.secondary.main} !important;`}
`;
const MenuItemIcon = styled(MenuItemIconMUI).attrs({}) `
  ${props => props.selected && `color: ${props.theme.palette.secondary.main} !important;`}
`;
const MenuItemText = styled(MenuItemTextMUI).attrs({}) `
  > span {
    ${props => props.selected && `color: ${props.theme.palette.secondary.main} !important;`}
  }
`;
class SidebarItem extends React.Component {
    render() {
        const { children, label, path, location } = this.props;
        return (React.createElement(MenuItem, { button: true, selected: hasMatched(location, path) },
            React.createElement(MenuItemIcon, { selected: hasMatched(location, path) },
                React.createElement(Icon, null, children)),
            React.createElement(MenuItemText, { inset: true, primary: label, selected: hasMatched(location, path) })));
    }
}
export default withRouter(SidebarItem);
//# sourceMappingURL=SidebarItem.js.map