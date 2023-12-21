import cookie from "@elysiajs/cookie";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { Block1 } from "../components/block";
import { BaceHtml } from "../server";
import { authCookieConfig, jwtConfig } from "../utils/auth";

export const userApp = new Elysia()
    .use(cookie())
    .use(
        jwt(jwtConfig)
    )
    .get("/login", () => loginPage())
    .get("/auth/:user", async ({ jwt, cookie, setCookie, params, set }) => {
        const token = await jwt.sign(params);

        setCookie("auth", token, authCookieConfig());

        return set.redirect = "/"
    })



const loginPage = () => (
    <BaceHtml>
        <body class="h-full w-screen flex items-center justify-center">
            <Block1 card1={{ title: "login", link: "/auth/test", icon: "enter" }} >
            </Block1>
        </body>
    </BaceHtml>
)