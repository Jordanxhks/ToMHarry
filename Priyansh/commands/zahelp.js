module.exports.config = {
    name: "ahelp",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "NtrEms", //modified by NtrEms, don't change the credits!
    description: "Beginner's Guide",
    commandCategory: "system",
    usages: "[Name module]",
    usePrefix: false,
    cooldowns: 5,
    envConfig: {
        autoUnsend: false,
        delayUnsend: 120
    }
};
 
module.exports.languages = {
    "vi": {
        "moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
        "helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
        "user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
    },
    "en": {
        "moduleInfo": "「  %1  」\n\n☆ ➜ 𝐔𝐬𝐚𝐠𝐞𝐬: %3\n\n☆ ➜ 𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲: %4\n\n☆ ➜ 𝐖𝐚𝐢𝐓 𝐓𝐢𝐌𝐞: %5 𝐒𝐜𝐧𝐝𝐬(s)\n\n☆ ➜ 𝐏𝐞𝐫𝐌𝐢𝐒𝐬𝐢𝐨𝐧: %6\n\n☆ ➜ 𝐃𝐞𝐬𝐂𝐫𝐢𝐩𝐓𝐢𝐨𝐧: %2\n\n» Module code by 𒄬• 𝐅𝐚𝐫𝐞𝐁𝐢𝐢𝐰 ː͢» ⸙",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
    }
};
 
module.exports.handleEvent = function ({ api, event, getText }) {
    const { commands } = global.client;
    const { threadID, messageID, body } = event;
 
    if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
    const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
    if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const command = commands.get(splitBody[1].toLowerCase());
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}
 
module.exports. run = function({ api, event, args, getText }) {
   
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const command = commands.get((args[0] || "").toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
 
    if (!command) {
        const arrayInfo = [];
        const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 20;
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }
 
    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `✶➱ ${++i} 💙 ➣ ${item}\n`;
 
    const text = `\n╔═══❖•° °•❖═══╗\n◆ 𝐏𝐀𝐆𝐄 ╠${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}      ◆\n╚═══❖•° °•❖═══╝\n\n  ╔══❖•° °•❖══╗\n     ≛ 𝐌𝐑 𝐀𝐌𝐈𝐑 ≛ \n  ╚══❖•° °•❖══╝`;
    return api.sendMessage("「 𓆩⃝𝐒𝐇𝐎𝐍𝐀𓆩๏𓆪 𝐂𝐌𝐃𝐒 」\n"+ msg + "\n" + text, threadID, async (error, info) => {
            if (autoUnsend) {
                await new Promise(resolve => setTimeout(resolve, delayUnsend * 120));
                return api.unsendMessage(info.messageID);
            } else return;
        });
    }
 
    return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};