// export const TOKEN_KEY = 'tokenHackathonUfsLagarto';
export const getAccessToken = (TOKEN_KEY) => () => localStorage.getItem(TOKEN_KEY);
export const isLoggedIn = (TOKEN_KEY) => () => !!getAccessToken(TOKEN_KEY);
export const logout = (TOKEN_KEY) => () => localStorage.removeItem(TOKEN_KEY);
export default (TOKEN_KEY) => {
    return {
        getAccessToken: getAccessToken(TOKEN_KEY),
        isLoggedIn: isLoggedIn(TOKEN_KEY),
        logout: logout(TOKEN_KEY)
    };
};
//# sourceMappingURL=index.js.map