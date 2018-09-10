import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { IconButton } from 'components';

type Props = {}

class ProfileBadge extends React.Component<Props> {

  state = {
    anchorEl: null,
  };

  handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          onClick={this.handleMenu}
          color="inherit"
        >
          account_circle
        </IconButton>
        <Menu
          getContentAnchorEl={null}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={!!anchorEl}
          onClose={this.handleCloseMenu}
        >
          {/*TODO add functions to this*/}
          <MenuItem onClick={this.handleCloseMenu}>Minha Conta</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Fazer Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ProfileBadge;
