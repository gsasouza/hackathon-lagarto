import { matchPath } from 'react-router-dom';
import { Location } from 'history';

export default (location: Location, path: string, exact: boolean = true): boolean =>
  !!matchPath(location.pathname, { path, exact });
