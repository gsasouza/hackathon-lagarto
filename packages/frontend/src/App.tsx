import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import { Snackbar } from 'components';
import AppRouter from './router/components/AppRouter';
import theme from './theme';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Snackbar>
            <AppRouter />
          </Snackbar>
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
