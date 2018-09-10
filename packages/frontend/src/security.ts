import security from 'security-utils';

export const TOKEN_KEY = 'tokenHackathonUfsLagarto';

const securityUtils = security(TOKEN_KEY);

export default securityUtils;

export const isLoggedIn = securityUtils.isLoggedIn;

export const logout = securityUtils.logout;

export const getAccessToken = securityUtils.getAccessToken;
