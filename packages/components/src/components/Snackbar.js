import * as React from 'react';
import SnackbarMUI from '@material-ui/core/Snackbar';
import SnackbarContext from '../context/SnackbarContext';
import IconButton from './IconButton';
class Snackbar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            message: '',
            duration: 4000,
            onClick: null,
        };
        this.handleSnackbarConfirm = () => {
            this.setState({
                message: '',
            });
        };
        this.handleSnackbar = ({ message, duration = 4000, onClick = null, }) => {
            this.setState({
                message,
                duration,
                onClick,
            });
        };
    }
    render() {
        const { duration, message, onClick } = this.state;
        return (React.createElement(React.Fragment, null,
            React.createElement(SnackbarContext.Provider, { value: {
                    showSnackbar: this.handleSnackbar,
                } },
                React.createElement(SnackbarMUI, { anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    }, open: !!message, autoHideDuration: duration, onClose: this.handleSnackbarConfirm, message: React.createElement("span", null, message), action: [
                        React.createElement(IconButton, { color: "inherit", onClick: onClick || this.handleSnackbarConfirm }, "close"),
                    ] }),
                this.props.children)));
    }
}
export default Snackbar;
//# sourceMappingURL=Snackbar.js.map