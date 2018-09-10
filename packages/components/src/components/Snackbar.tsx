import * as React from 'react';
import SnackbarMUI from '@material-ui/core/Snackbar';

import SnackbarContext from '../context/SnackbarContext';

import IconButton from './IconButton';

type Props = {}

type State = {
  message: string,
  duration: number,
  onClick?: (() => void) | null,
}

class Snackbar extends React.Component<Props, State> {

  state = {
    message: '',
    duration: 4000,
    onClick: null,
  };

  handleSnackbarConfirm = () => {
    this.setState({
      message: '',
    });
  };

  handleSnackbar = ({
    message,
    duration = 4000,
    onClick = null,
  }: State) => {
    this.setState({
      message,
      duration,
      onClick,
    });
  };

  render() {

    const { duration, message, onClick } = this.state;

    return (
      <React.Fragment>
        <SnackbarContext.Provider
          value={{
            showSnackbar: this.handleSnackbar,
          }}
        >
          <SnackbarMUI
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={!!message}
            autoHideDuration={duration}
            onClose={this.handleSnackbarConfirm}
            message={<span>{ message }</span>}
            action={[
              <IconButton
                color="inherit"
                onClick={onClick || this.handleSnackbarConfirm}
              >
                close
              </IconButton>,
            ]}
          />
          {this.props.children}
        </SnackbarContext.Provider>
      </React.Fragment>
    );
  }
}

export default Snackbar;
