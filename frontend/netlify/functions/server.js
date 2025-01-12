import { createServer } from "../../dist/server/server.js";
import serverless from "serverless-http";

let serverHandler;

const getHandler = async () => {
  if (!serverHandler) {
    try {
      const { app } = await createServer();
      serverHandler = serverless(app, {
        binary: ["*/*"],
        provider: "netlify",
      });
    } catch (error) {
      console.error("Error creating server:", error);
      throw error;
    }
  }
  return serverHandler;
};

export const handler = async (event, context) => {
  try {
    const handle = await getHandler();
    return await handle(event, context);
  } catch (error) {
    console.error("Serverless handler error:", error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  }
};
