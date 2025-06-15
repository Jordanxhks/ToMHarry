module.exports.config = {
	name: "rename",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "AMIRxJORDAN",
	description: "",
	commandCategory: "system",
	usages: "[]",
	cooldowns: 20,
};

module.exports.run = async ({ event, api, args, Threads }) => {
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]),
            idBot = api.getCurrentUserID();
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.changeNickname(custom, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Renamed successfully ${count} Group`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Cannot rename at" + threadError.lenght + " Group",event.threadID, event.messageID)
        }, event.messageID);
    }
    else {
        for (const idThread of allThread) {
            const threadSetting = global.client.threadData.get(idThread.threadID) || {};
            api.changeNickname(`[ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by JORDAN " : global.config.BOTNAME}`, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Renamed successfully ${count} Group`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Cannot rename at " + threadError.length + " Group",event.threadID, event.messageID)
        }, event.messageID);
    }
}