import * as React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

type Props = {
  fullScreen: boolean
}

export default class Loading extends React.Component<Props> {
  render () {
    const { fullScreen } = this.props;
    const progress = <CircularProgress size={80} thickness={5}/>;
    if (fullScreen) {
      return (
        <Wrapper>
          {progress}
        </Wrapper>
      )
    }
    return progress
  }
}
