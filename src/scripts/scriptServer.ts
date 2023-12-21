import Elysia from "elysia";

export const scriptServer = new Elysia({
    prefix: "/scripts",
})
    .get("/qr.js", () => Bun.file("./src/scripts/qr.js")) 