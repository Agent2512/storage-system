const authtimeout = Number(process.env.AUTH_TIMEOUT) || 15

export const jwtConfig = {
    secret: process.env.JWT_SECRET || "secret",
    exp: `${authtimeout}d`,
    alg: "HS512",
}

export const authCookieConfig = () => ({
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * authtimeout),
    sameSite: true,
    secure: true,
})


export const auth = async (_: any) => {
    const authCookie = _.cookie.auth;
    const jwt = _.jwt; // jwt is a function that verifies the cookie
    const setCookie = _.setCookie; // setCookie is a function that sets the cookie

    if (!authCookie) {
        return _.set.redirect = "/login";
    }

    const test = await jwt.verify(authCookie);

    if (!test) {
        return _.set.redirect = "/login";
    }


    const newToken = await jwt.sign(test);

    _.set.cookie = {
        ..._.set.cookie,
        auth: {
            value: newToken,
            ...authCookieConfig()
        }
    }


};
