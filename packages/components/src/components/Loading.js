import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
const Wrapper = styled.div `
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export default class Loading extends React.Component {
    render() {
        const { fullScreen } = this.props;
        const progress = React.createElement(CircularProgress, { size: 80, thickness: 5 });
        if (fullScreen) {
            return (React.createElement(Wrapper, null, progress));
        }
        return progress;
    }
}
//# sourceMappingURL=Loading.js.map