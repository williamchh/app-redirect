const axios = require("axios");

module.exports = {
  dispatcherGet: async (url, header) => {
    const config = {
      method: "GET",
      url: "https://ztzchart.com" + url,
      headers: header,
    };
    const res = await axios.get(config.url, header);

    return res.data;
  },
  dispatcherPost: async (url, header, body) => {
    const config = {
      method: "post",
      url: "https://ztzchart.com" + url,
      headers: header,
    };
    const res = await axios.post(config.url, body, config);

    return res.data;
  },
};
