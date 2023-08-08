import axios from "axios";

const baseUrl = "http://localhost:8080/v1";

axios.defaults.headers.post["X-Optimizely-SDK-Key"] = "BNFZhjLJcatSku1y6XLAM";
axios.defaults.headers.post["Accept"] = "text/event-stream";
axios.defaults.headers.post["Content-Type"] = "application/json";

const decideAll = (userContext) => {
  const request = axios.post(`${baseUrl}/decide`, userContext);
  return request.then((response) => response.data[0].variables);
};

const sendOdpEvent = (parameters) => {
  const request = axios.post(`${baseUrl}/send-odp-event`, parameters);
  return request.then((response) => response.data);
};

export default {
  decideAll,
  sendOdpEvent,
};
