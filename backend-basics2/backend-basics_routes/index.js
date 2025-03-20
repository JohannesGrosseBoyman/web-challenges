import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
    console.log('Server is running at host hhtp://127.0.0.1:${port}/')
})
