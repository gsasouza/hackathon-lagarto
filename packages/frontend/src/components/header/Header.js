import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolbarMUI from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import { IconButton } from 'components';
import ProfileBadge from './ProfileBadge';
import { isLoggedIn } from '../../security';
const Toolbar = styled(ToolbarMUI) `
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
`;
class Header extends React.Component {
    render() {
        const { toggleSidebar } = this.props;
        return (React.createElement(AppBar, { position: "static" },
            React.createElement(Toolbar, null,
                React.createElement(IconButton, { color: 'inherit', onClick: toggleSidebar }, 'menu'),
                React.createElement("div", null, isLoggedIn() && React.createElement(ProfileBadge, null)))));
    }
}
export default Header;
//# sourceMappingURL=Header.js.map