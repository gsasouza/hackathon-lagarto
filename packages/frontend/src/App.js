import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { Snackbar } from 'components';
import AppRouter from './router/components/AppRouter';
import theme from './theme';
class App extends React.Component {
    render() {
        return (React.createElement(ThemeProvider, { theme: theme },
            React.createElement(MuiThemeProvider, { theme: theme },
                React.createElement(Snackbar, null,
                    React.createElement(AppRouter, null)))));
    }
}
export default App;
//# sourceMappingURL=App.js.map