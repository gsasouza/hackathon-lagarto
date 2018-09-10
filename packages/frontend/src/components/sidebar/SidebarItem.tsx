import * as React from 'react';
import MenuItemMUI from '@material-ui/core/MenuItem';
import MenuItemIconMUI from '@material-ui/core/ListItemIcon';
import MenuItemTextMUI from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { hasMatched } from 'router-utils';

type StyledProps = { selected: boolean }

const MenuItem = styled(MenuItemMUI).attrs<StyledProps>({})`
  ${props => props.selected && `background-color: ${props.theme.palette.primary.main} !important;`}
  ${props=> props.selected && `color: ${props.theme.palette.secondary.main} !important;`}
`;

const MenuItemIcon = styled(MenuItemIconMUI).attrs<StyledProps>({})`
  ${props => props.selected && `color: ${props.theme.palette.secondary.main} !important;`}
`;

const MenuItemText = styled(MenuItemTextMUI).attrs<StyledProps>({})`
  > span {
    ${props => props.selected && `color: ${props.theme.palette.secondary.main} !important;`}
  }
`;

type Props = {
  children: string | React.ReactNode,
  label: string,
  path: string,
} & RouteComponentProps<{}>;

class SidebarItem extends React.Component<Props> {
  render() {
    const { children, label, path, location } = this.props;
    return (
      <MenuItem button selected={hasMatched(location, path)}>
        <MenuItemIcon selected={hasMatched(location, path)}>
          <Icon>
            {children}
          </Icon>
        </MenuItemIcon>
        <MenuItemText inset primary={label} selected={hasMatched(location, path)} />
      </MenuItem>
    );
  }
}

export default withRouter(SidebarItem);
