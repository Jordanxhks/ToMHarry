module.exports.config = {
	name: "type",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "AMIRxJORDAN",
	description: "",
	commandCategory: "group",
	usages: "[]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("𝐁𝐚𝐁𝐞 𝐊𝐲𝐚 𝐓𝐲𝐩𝐞 𝐊𝐑𝐫𝐍𝐚 ?", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}
