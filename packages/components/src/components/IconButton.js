import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButtonMUI from '@material-ui/core/IconButton';
class IconButton extends React.Component {
    render() {
        const { children, onClick, color } = this.props;
        if (typeof children === 'string') {
            return (React.createElement(IconButtonMUI, { onClick: onClick, color: color },
                React.createElement(Icon, null, children)));
        }
        return (React.createElement(IconButtonMUI, { onClick: onClick, color: color }, children));
    }
}
export default IconButton;
//# sourceMappingURL=IconButton.js.map