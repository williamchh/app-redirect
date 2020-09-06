const axios = require("axios");

module.exports = {
  dispatcherGet: async (url, header) => {
    header.host = "ztzchart.com";
    const config = {
      method: "GET",
      url: "https://ztzchart.com" + url,
      headers: header,
    };
    const res = await axios.get(config.url, header);

    return res.data;
  },
  dispatcherPost: async (url, header, body) => {
    header.host = "ztzchart.com";
    const config = {
      // method: "post",
      url: "https://ztzchart.com" + url,
      ssl: {
        rejectUnauthorized: false,
      },
      headers: header,
    };
    try {
      const res = await axios({
        method: "POST",
        url: config.url,
        data: body,
        headers: header,
      });

      return res.data;
    } catch (error) {
      return error.message;
    }
  },
};
