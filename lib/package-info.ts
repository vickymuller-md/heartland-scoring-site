import lock from "../package-lock.json";

// Server/build metadata only. Tests check the lock against the installed package.
// Pass the scalar to client components; never ship the complete dependency lock.
export const SCORING_VERSION = lock.packages["node_modules/heartland-scoring"].version;
