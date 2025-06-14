module.exports.config = {
	name: "demote",
	version: "1.0.0", 
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "",
	commandCategory: "General", 
	usages: "[tag]", 
	cooldowns: 0,
};

module.exports.run = function({ api, event }) {
	var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("An error occurred!",event.threadID);
if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Phle MeKo Admin Banao 😒', event.threadID, event.messageID);
if(!mention[0]) return api.sendMessage("You must tag the person to demote it.",event.threadID);
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {				api.changeAdminStatus(event.threadID,mention[o],false,) 
				},3000)
			}
		}
	})
      }