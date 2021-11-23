const axios = require("axios");

exports.postLength = async (req, res) => {
  const data = await axios({
    url: "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index",
    headers: { accept: "application/json" }
  }).then((response) => {
    let index_count = response.data.indexOf("<posts count=");
    let index_offset = response.data.indexOf(`offset="0"`);

    let sliced = Number(
      response.data.slice(index_count + 14, index_offset - 2)
    );
    return sliced;
  });
  res.json({ posts: data });
};

exports.lastPosts = async (req, res) => {
  await axios({
    url:
      "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=1000",
    headers: { accept: "application/json" }
  }).then((response) => {
    console.log(response.data);
    res.json({ posts: response.data });
  });
};

exports.lastPosts = async (req, res) => {
  await axios({
    url: `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=1000`,
    headers: { accept: "application/json" }
  }).then((response) => {
    console.log(response.data);
    res.json({ posts: response.data });
  });
};

exports.postByTags = async (req, res) => {
  const { tags } = req.query;
  console.log(tags);
  await axios({
    url: `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=1000&tags=${tags}`,
    headers: { accept: "application/json" }
  }).then((response) => {
    res.json({ posts: response.data });
  });
};

exports.postById = async (req, res) => {
  const { id } = req.params;
  await axios({
    url: `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&id=${id}`,
    headers: { accept: "application/json" }
  }).then((response) => {
    console.log(response.data);
    res.json({ posts: response.data });
  });
};
