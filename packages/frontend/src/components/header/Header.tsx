import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolbarMUI from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import { IconButton } from 'components';

import ProfileBadge from './ProfileBadge';

import { isLoggedIn } from '../../security';

const Toolbar = styled(ToolbarMUI)`
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
`;

type Props = {
  toggleSidebar: () => void,
}

class Header extends React.Component<Props> {
  render() {

    const { toggleSidebar } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color={'inherit'} onClick={toggleSidebar}>
            {'menu'}
          </IconButton>
          <div>
            {isLoggedIn() && <ProfileBadge/> }
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
