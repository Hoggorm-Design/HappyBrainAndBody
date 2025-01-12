import { createServer } from "../../dist/server/server.js";
import serverless from "serverless-http";

let serverHandler;

export async function getHandler() {
  if (!serverHandler) {
    const { app } = await createServer();
    serverHandler = serverless(app);
  }
  return serverHandler;
}

export const handler = async (event, context) => {
  const handle = await getHandler();
  return handle(event, context);
};
