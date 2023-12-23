import { html, Html } from "@elysiajs/html";
import Elysia from "elysia";
import { indexApp } from "./pages/indexApp";
import { itemApp } from "./pages/itemApp";
import { userApp } from "./pages/userApp";
import { scriptServer } from "./scripts/scriptServer";

const normalCssFile = Bun.file("./tailwind-gen/styles.css")
const cssExists = await normalCssFile.exists();

const app = new Elysia({})
    .get("/styles.css", async () => {


        if (!cssExists) {
            return Bun.file("./src/styles.css")
        }

        return normalCssFile
    })
    .use(scriptServer)
    .use(html())
    .use(userApp)
    .use(indexApp)
    .use(itemApp)



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

            {!cssExists && <script src="https://cdn.tailwindcss.com"></script>}

            <link href="/styles.css" rel="stylesheet" />
        </head>
        {children}
    </html>
)