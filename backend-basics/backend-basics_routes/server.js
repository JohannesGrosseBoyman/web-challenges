import { createServer } from "node:http";

// export const server = …
export const server = createServer((request, response) => {
    if (request.url === "/api/fish/1") {
        response.statusCode = 200;
        response.end("Shrimp");
        return;
    } else if (request.url === "/api/fish/2") {
        response.statusCode = 200;
        response.end("Anemonefish");
        return;
    } else {
        response.statusCode = 404;
        response.end("Not found");
    }
});