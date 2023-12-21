import Elysia from "elysia";
import { Block1, Block2 } from "../components/block";
import { BaceHtml } from "../server";

const test = (_: any) => {
    const authCookie = _.cookie.auth
    console.log(authCookie)


}

export const indexApp = new Elysia()
    .get("/", () => indexPage(), { beforeHandle: test })
    .get("/qr", () => qrPage(),)


const indexPage = () => (
    <BaceHtml>
        <body class="h-full w-screen flex items-center justify-center">
            <Block2 card1={{ title: "scanner", link: "/qr", icon: "qr" }} card2={{ title: "edit user", link: "/editUser", icon: "user" }}>
            </Block2>
        </body>
    </BaceHtml>
)


const qrPage = () => (
    <BaceHtml>
        <body class="h-full w-screen flex items-center justify-center">
            <Block1 card1={{ title: "black", link: "/", icon: "arrow-left-r" }}>
                <div id="qrReader"></div>
            </Block1>
        </body>
        <script defer src="/scripts/qr.js"></script>
    </BaceHtml>
)
