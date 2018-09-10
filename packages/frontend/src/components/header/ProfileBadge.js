import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { IconButton } from 'components';
class ProfileBadge extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            anchorEl: null,
        };
        this.handleMenu = (event) => {
            this.setState({ anchorEl: event.currentTarget });
        };
        this.handleCloseMenu = () => {
            this.setState({ anchorEl: null });
        };
    }
    render() {
        const { anchorEl } = this.state;
        return (React.createElement("div", null,
            React.createElement(IconButton, { onClick: this.handleMenu, color: "inherit" }, "account_circle"),
            React.createElement(Menu, { getContentAnchorEl: null, anchorEl: anchorEl, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                }, open: !!anchorEl, onClose: this.handleCloseMenu },
                React.createElement(MenuItem, { onClick: this.handleCloseMenu }, "Minha Conta"),
                React.createElement(MenuItem, { onClick: this.handleCloseMenu }, "Fazer Logout"))));
    }
}
export default ProfileBadge;
//# sourceMappingURL=ProfileBadge.js.map