const fs = require("fs");
module.exports.config = {
  name: "prefix",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "JORDANOFFICIAL", 
  description: "no prefix",
  usePrefix : true ,
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("prefix")==0 || (event.body.indexOf("Prefix")==0 || (event.body.indexOf("Ano prefix")==0 || (event.body.indexOf("ano prefix")==0)))) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Karachi").format("HH:mm:ss || D/MM/YYYY");
    var msg = {
        body: `! My Prefix Is » ${global.config.PREFIX} «\nUse ${global.config.PREFIX}help For List Of Commands.\n[ ${gio} ]`
      }
      api.sendMessage(msg, threadID, messageID);
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

}