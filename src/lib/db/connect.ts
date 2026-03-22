import mongoose from "mongoose";

declare global {
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables.");
  }

  if (!global.mongooseCache) {
    global.mongooseCache = {
      conn: null,
      promise: null,
    };
  }

  const cache = global.mongooseCache;

  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI, {
      dbName: "therapy-db",
    });
  }

  cache.conn = await cache.promise;
  return cache.conn;
}