// worker.js - فاضي
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
