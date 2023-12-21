import Elysia from "elysia";
import { Block1 } from "../components/block";
import { BaceHtml } from "../server";

export const userApp = new Elysia()
    .get("/login", () => loginPage())



const loginPage = () => (
    <BaceHtml>
        <body class="h-full w-screen flex items-center justify-center">
            <Block1 card1={{ title: "login", link: "/auth/test", icon: "enter" }} >
            </Block1>
        </body>
    </BaceHtml>
)