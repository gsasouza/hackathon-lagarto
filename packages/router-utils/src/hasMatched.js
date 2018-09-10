import { matchPath } from 'react-router-dom';
export default (location, path, exact = true) => !!matchPath(location.pathname, { path, exact });
//# sourceMappingURL=hasMatched.js.map