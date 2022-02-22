import axios from "axios";

const MOCK_URL = "http://localhost:4000";

const mockClient = axios.create({
  baseURL: MOCK_URL,
});

export function getProductList() {
  return mockClient.get("/products");
}
