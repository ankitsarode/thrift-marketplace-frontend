const API_BASE = "https://thrift-backend.sarodeankit.workers.dev";

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/api/products`);
  return res.json();
}
