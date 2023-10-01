export const userName = state => state.auth.user.name

export const userEmail = state => state.auth.user.email

export const selectUser = state => state.auth.user

export const userToken = state => state.auth.token

export const selectIsLoggedIn = state => state.auth.isLoggedIn

export const selectIsRefreshing = state => state.auth.isRefreshing