const axios = require("axios");

exports.api = axios.create({
  baseURL: "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index" //"https://sech-api.herokuapp.com/"
});
