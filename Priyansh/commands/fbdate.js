module.exports.config = {
  name: "fbdate",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ATF-TEAM",
  description: "FB Acc Creation DaTe",
  usages: "fbdate",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
   const axios = require("axios")
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Karachi').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Karachi').format('HH:mm:ss');
  var thu = moment.tz('Asia/Karachi').format('dddd');
  var thang = moment.tz("Asia/Karachi").format('MM');
  var nam = moment.tz("Asia/Karachi").format('YYYY');
  if (thu == 'Sunday') thu = 'SunDay'
  if (thu == 'Monday') thu = 'MonDay'
  if (thu == 'Tuesday') thu = 'TuesDay'
  if (thu == 'Wednesday') thu = 'WednesDay'
  if (thu == "Thursday") thu = 'ThursDay'
  if (thu == 'Friday') thu = 'FriDay'
  if (thu == 'Saturday') thu = 'SaturDay'
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);
  const finduid = res.data.data.uid
  const finddate = res.data.data.date
  let name = await Users.getNameUser(event.senderID);
   let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
 return api.sendMessage({body:`\n●●● ━━━━━ ◥💜◤ ━━━━━ ●●●\n𝐇𝐞𝐥𝐥𝐨: ${name}\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐃: ${finduid}\n𝐂𝐫𝐞𝐚𝐓𝐢𝐨𝐧 𝐃𝐚𝐓𝐞: ${finddate} \n𝐇𝐨𝐮𝐫: ${gio}\n𝐃𝐚𝐲: ${ngay} ${thu}\n𝐘𝐞𝐚𝐫: ${nam}\n𝐓𝐢𝐌𝐞: ${u.join(':')}\n❖•━━━━━━━━━━━━━━━━━━•❖\n`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID,event.messageID);
}