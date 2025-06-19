const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://as-api.andolasoft.co.in"
    : "http://192.168.2.167:9000";

export default baseUrl;