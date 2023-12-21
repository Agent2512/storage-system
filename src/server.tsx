import cookie from "@elysiajs/cookie";
import { html, Html } from "@elysiajs/html";
import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { indexApp } from "./pages/indexApp";
import { itemApp } from "./pages/itemApp";
import { userApp } from "./pages/userApp";
import { scriptServer } from "./scripts/scriptServer";

const app = new Elysia({})
    .get("/styles.css", () => Bun.file("./tailwind-gen/styles.css"))
    .use(scriptServer)
    .use(
        jwt({
            name: 'jwt',
            secret: process.env.JWT_SECRET || "secret",
            expiresIn: "15d",
            algorithm: "HS512",
        })
    )
    .use(cookie({
        httpOnly: true,
    }))
    .use(html())
    .use(indexApp)
    .use(itemApp)
    .use(userApp)
    .get("/auth/:user", async ({ jwt, cookie, setCookie, params, set }) => {
        setCookie('auth', await jwt.sign(params), {
            httpOnly: true,
            maxAge: 7 * 86400,
        })

        return set.redirect = "/"
    })


app.listen(3000);
console.log("Listening on port 3000");
export type app = typeof app;

let routes: string[] = [
    ...app.routes.map(p => `${p.path} ${p.method} `),
]

routes
    .reduce((acc, cur) => {
        if (acc.indexOf(cur) === -1) {
            acc.push(cur)
        }
        return acc
    }, [] as string[])
    .sort()
    .forEach((route) => {
        console.log(route)
    })

export const BaceHtml = ({ children }: any) => (
    <html lang="en">
        <head>
            <title>Elysia</title>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://unpkg.com/htmx.org@1.9.7/dist/htmx.js" />
            {/* <script src="https://unpkg.com/htmx.org/dist/ext/ws.js"></script> */}

            <script src="https://unpkg.com/html5-qrcode" type="text/javascript"></script>

            <link href="https://unpkg.com/css.gg/icons/icons.css" rel="stylesheet" />

            <link href="/styles.css" rel="stylesheet" />
        </head>
        {children}
    </html>
)