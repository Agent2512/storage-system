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
    .get("/login/auth", async ({ jwt, cookie, setCookie, params, set }) => {
        const token = await jwt.sign(params);

        setCookie("auth", token, authCookieConfig());

        return set.redirect = "/"
    })



const loginPage = () => (
    <BaceHtml>
        <body class="h-full w-screen flex items-center justify-center">
            <form class="gap-4 grid grid-cols-2 grid-rows-4" action="/login/auth" method="post" >
                <div class="col-span-2 row-span-3 gap-4 flex flex-col justify-center">
                    <div class="flex flex-col border-2 border-blue-600 border-solid rounded p-2">
                        <label>Email/Phone</label>
                        <input type="text" name="user" class="border-2 border-blue-600 border-solid rounded" />
                    </div>
                    <div class="flex flex-col border-2 border-blue-600 border-solid rounded p-2">
                        <label>Password</label>
                        <input type="password" name="password" class="border-2 border-blue-600 border-solid rounded" />
                    </div>
                </div>
                <button type="submit" class="col-span-2">
                    <div class="w-[304px] h-36 bg-blue-600 flex items-center justify-center flex-col gap-1 rounded">
                        <i class="gg-enter"></i>
                        <p>login</p>
                    </div>
                </button>
            </form>
        </body>
    </BaceHtml>
)