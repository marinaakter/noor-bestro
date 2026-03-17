import "dotenv/config";

const rawClientUrl = process.env.CLIENT_URL || "http://localhost:5173";

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5000,
  clientUrl: rawClientUrl,
  clientOrigins: rawClientUrl
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
  mongoUri: process.env.MONGODB_URI,
};

if (!env.mongoUri) {
  throw new Error("MONGODB_URI is missing. Add it to your environment variables.");
}

export default env;
