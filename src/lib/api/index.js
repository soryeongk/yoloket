import axios from "axios";

const MOCK_URL = "http://localhost:4000";
const BASE_URL = "http://35.171.161.153";

const mockClient = axios.create({
  baseURL: MOCK_URL,
});

const client = axios.create({
  baseURL: BASE_URL,
});

export function getProductList() {
  return mockClient.get("/products");
}

export function getProductDetail(id) {
  return mockClient.get(`/products/${id}`);
}

export function getProductOption(id) {
  console.log("product Id", id);

  return client.get();
}
