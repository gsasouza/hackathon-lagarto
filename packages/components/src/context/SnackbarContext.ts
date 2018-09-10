import * as React from 'react';

export type ShowSnackbarArgs = {
  onClick?: (() => void) | null,
  message: string,
  duration: number,
};

export type SnackbarContextProps = {
  showSnackbar: (args: ShowSnackbarArgs) => void,
};

const SnackbarContext = React.createContext({
  showSnackbar: (args: ShowSnackbarArgs) => console.log(args),
});

export default SnackbarContext;
