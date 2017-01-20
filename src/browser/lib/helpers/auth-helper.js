export isLoggedIn = () => !!localStorage.accessToken

export saveAccessToken = accessToken => localStorage.accessToken = accessToken

export getAccessToken = () => localStorage.accessToken
