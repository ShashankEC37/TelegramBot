require("dotenv").config();
let Accesstoken = process.env.ACCESS_TOKEN
let Chatid = process.env.CHAT_ID
const axios = require('axios');

exports.postRandomWiki = async (req, res) => {
  try {
    const response = await axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary');
    console.log(response.data)
    const { title, extract, content_urls } = response.data;
    const message = `Here is the summary of *${title}*\n\n${extract}\n\n[Read more](${content_urls.desktop.page})`;
    const telegramUrl = `https://api.telegram.org/bot${Accesstoken}/sendMessage?chat_id=${Chatid}&text=${encodeURIComponent(message)}&parse_mode=Markdown`;

    await axios.get(telegramUrl);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
