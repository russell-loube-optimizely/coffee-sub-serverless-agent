import axios from "axios";

const baseUrl = "https://serverless-agent.russell-loube.workers.dev/v1";

axios.defaults.headers.post["X-Optimizely-SDK-Key"] = "B3sNMM9RTdM6X7b6kMW4r";
axios.defaults.headers.post["Accept"] = "text/event-stream";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["X-Optimizely-Enable-FEX"] = "true";
axios.defaults.headers.post["X-Optimizely-Datafile-KV"] = "true";
axios.defaults.headers.post["X-Optimizely-Trimmed-Decisions"] = "false";

const agentDecideAll = (visitorId) => {
  const data = {};

  const config = {
    headers: {
      "X-Optimizely-Visitor-Id": visitorId,
    },
  };

  const request = axios.post(`${baseUrl}/decide`, data, config);
  return request.then((response) => response.data);
};

export default {
  agentDecideAll,
};
