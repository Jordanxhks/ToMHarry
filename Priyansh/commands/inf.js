module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "JORDANOFFICIAL", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
  usePrefix: false ,
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/karachi").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/YQZRYYo.jpg"];
var callback = () => api.sendMessage({body:`✦𝐎𝐖𝐍𝐄𝐑 & 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢✦

➥ 𝐁𝐨𝐓 𝐍𝐚𝐌𝐞 ➠:\n ${global.config.BOTNAME}

➥ 𝐁𝐨𝐓 𝐏𝐫𝐞𝐟𝐢𝐱 ➠: 〖 ${global.config.PREFIX} 〗

➥ 𝐁𝐨𝐓 𝐎𝐰𝐧𝐞𝐫 ➠: \n┏━━━━ 🖤 ━━━━┓
   ✦❥⋆⃝𝗝𝗢𝗥𝗗𝗔𝗡 ✦ 
┗━━━    🖤 ━━━━┛ ,

➥ 𝐎𝐰𝐧𝐞𝐫 𝐅𝐁 𝐋𝐢𝐧𝐤 ｡^‿^｡:
https://m.facebook.com/profile.php?id=100012191281263 ,

✬ 𝐓𝐨𝐃𝐚𝐲 𝐈𝐬:\n ${juswa} 

➳ 𝐁𝐨𝐓 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

✫ 𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠 :\n${global.config.BOTNAME} 𝐁𝐨𝐓!\n`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };