const TTL = Number(process.env.CACHE_TTL_MS || 600000);
const store = new Map();
let hits = 0;
let misses = 0;

function get(key) {
  const entry = store.get(key);
  if (!entry) {
    misses++;
    return null;
  }

  if (Date.now() > entry.expiresAt) {
    store.delete(key);
    misses++;
    return null;
  }

  hits++;
  return entry.value;
}

function set(key, value) {
  store.set(key, {
    value,
    expiresAt: Date.now() + TTL,
  });
}

function stats() {
  const total = hits + misses;
  return {
    size: store.size,
    hits,
    misses,
    hitRate: total === 0 ? "0%" : `${Math.round((hits / total) * 100)}%`,
  };
}

module.exports = { get, set, stats };