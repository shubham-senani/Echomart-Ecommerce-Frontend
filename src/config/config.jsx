import Cookies from "js-cookie";

const token = Cookies.get("token");

const customFetch = (url, options = {}) => {
  const defaultOptions = {
    // credentials: 'include',
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    baseUrl: "https://echo-mart-ecommerce.onrender.com/api/v1",
  };
  const mergedHeaders = {
    ...defaultOptions.headers,
    ...options.headers,
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: mergedHeaders,
  };
  const fullUrl = `${defaultOptions.baseUrl}${url}`;

  return fetch(fullUrl, mergedOptions);
};

export default customFetch;
