// export const TOKEN_KEY = 'tokenHackathonUfsLagarto';

export const getAccessToken = (TOKEN_KEY: string) => () => localStorage.getItem(TOKEN_KEY);

export const isLoggedIn = (TOKEN_KEY: string) => () => !!getAccessToken(TOKEN_KEY);

export const logout = (TOKEN_KEY: string) => () => localStorage.removeItem(TOKEN_KEY);

export default (TOKEN_KEY: string) => {
  return {
    getAccessToken: getAccessToken(TOKEN_KEY),
    isLoggedIn: isLoggedIn(TOKEN_KEY),
    logout: logout(TOKEN_KEY)
  }
}
