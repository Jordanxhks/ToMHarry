module.exports.config = {
聽 name: "fbdatev2",
聽 version: "1.0.0",
聽 hasPermssion: 0,
聽 credits: "ATF-TEAM",
聽 description: "Fb Acc DaTe",
聽 commandCategory: "system",
聽 usages: "",
聽 cooldowns: 0,
聽 dependencies: []
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
聽 const moment = require("moment-timezone");
聽 var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
聽 var gio = moment.tz('Asia/Karachi').format('HH:mm:ss');
聽 var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  var thang = moment.tz("Asia/Ho_Chi_Minh").format('MM');
  var nam = moment.tz("Asia/Ho_Chi_Minh").format('YYYY');
聽 if (thu == 'Sunday') thu = 'sunday'
聽 if (thu == 'Monday') thu = 'monday'
聽 if (thu == 'Tuesday') thu = 'tuesday'
聽 if (thu == 'Wednesday') thu = 'wednesday'
聽 if (thu == "Thursday") thu = 'Thursday'
聽 if (thu == 'Friday') thu = 'friday'
聽 if (thu == 'Saturday') thu = 'saturday'
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);
  const finduid = res.data.data.uid
  const finddate = res.data.data.date
聽 let name = await Users.getNameUser(event.senderID);
   let
  s = process.uptime(),u = [s/3600<<0, s/60%60<<0, s%60<<0].map(el => el < 10?'0'+el: el);
聽return api.sendMessage({body:`鈼忊棌鈼� 鈹佲攣鈹佲攣鈹� 鈼ヰ煉溾棨 鈹佲攣鈹佲攣鈹� 鈼忊棌鈼廫n饾悋饾悶饾惀饾惀饾惃: ${name}\n饾悈饾悮饾悳饾悶饾悰饾惃饾惃饾悿 饾悎饾悆: ${finduid}\n饾悅饾惈饾悶饾悮饾悡饾悽饾惃饾惂 饾悆饾悮饾悡饾悶: ${finddate} \n饾悅饾惍饾惈饾惈饾悶饾惂饾惌 饾悡饾悽饾悓饾悶: ${gio}\n饾悡饾惃饾悆饾悮饾惒: ${ngay} ${thu}\n饾悩饾悶饾悮饾惈: ${nam}\n饾悂饾惃饾悡 饾悗饾惂饾悑饾悽饾惂饾悶: ${u.join(':')}\n鉂栤€⑩攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲攣鈹佲€⑩潠\n`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID,event.messageID);
}