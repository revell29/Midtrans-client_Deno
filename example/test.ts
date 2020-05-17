import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/index.ts";
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`server running on port 8000`);
app.listen({ port: 8000 });
