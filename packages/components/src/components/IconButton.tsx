import * as React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButtonMUI from '@material-ui/core/IconButton';

type Props = {
  children: string | React.ReactNode,
  onClick: (event?: any) => void,
  color?: "inherit" | "primary" | "secondary" | "default" | undefined,
}


class IconButton extends React.Component<Props> {
  render() {
    const { children, onClick, color } = this.props;
    if (typeof children === 'string') {
      return (
        <IconButtonMUI onClick={onClick} color={color}>
          <Icon>{ children }</Icon>
        </IconButtonMUI>
      )
    }
    return (
      <IconButtonMUI onClick={onClick} color={color}>
        { children }
      </IconButtonMUI>
    )
  }
}

export default IconButton;
