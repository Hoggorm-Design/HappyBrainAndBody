const serverless = require("serverless-http");
const path = require("path");

let serverHandler;

const getHandler = async () => {
  if (!serverHandler) {
    try {
      const { createServer } = await import(
        path.join(process.cwd(), "dist/server/server.js")
      );
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

exports.handler = async (event, context) => {
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
