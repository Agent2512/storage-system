import Elysia from "elysia";
import { Block1, Block3 } from "../components/block";
import { BaceHtml } from "../server";
import { auth } from "../utils/auth";

export const itemApp = new Elysia()
    .get("/item/:id", ({ params: { id } }) => itemPage(id), { beforeHandle: auth })
    .get("/item/:id/log", ({ params: { id } }) => tempPage(id), { beforeHandle: auth })
    .get("/item/:id/update", ({ params: { id } }) => tempPage(id), { beforeHandle: auth })


const itemPage = (id: any) => (
    <BaceHtml>
        <body class="h-screen w-screen flex items-center justify-center">
            <Block3 card1={{ link: `/item/${id}/update`, title: "Update Log", icon: "add-r" }} card2={{ link: `/item/${id}/log`, title: "See Logs", icon: "list" }} card3={{ link: `/`, title: "back", icon: "arrow-left-r" }}>
                <h1>{id}</h1>
            </Block3>
        </body>
    </BaceHtml>
)

const tempPage = (id: any) => (
    <BaceHtml>
        <body class="h-screen w-screen flex items-center justify-center">
            <Block1 card1={{ link: `/item/${id}`, title: "back", icon: "arrow-left-r" }} >
                <h1>{id}</h1>
            </Block1>
        </body>
    </BaceHtml>
)