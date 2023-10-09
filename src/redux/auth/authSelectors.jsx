export const selectUser = state => state.auth.user

export const userToken = state => state.auth.token

export const selectIsLoggedIn = state => state.auth.isLoggedIn

export const selectIsRefreshing = state => state.auth.isRefreshing