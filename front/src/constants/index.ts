const authNavigations = {
    AUTH_HOME: 'AuthHome',
    LOGIN: 'Login',
    SIGNUP: 'SignUp'
} as const;
// 여기선 로그인 그리고 read-only 로 만들기 위해, as const로 선언

export { authNavigations };