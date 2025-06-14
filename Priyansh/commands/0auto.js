const axios = require("axios");
const request = require("request");

module.exports.config = {
  name: "auto",
  version: "1.5.1",
  hasPermission: 0,
  credits: "AMIROFFICIAL",
  description: "Auto Ans",
  commandCategory: "AI",
  usages: "",
  cooldowns: 5,
};

let userMemory = {};
let isActive = true;

// ***
module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, body, messageReply } = event;
  if (!isActive || !body) return;

  // **
  if (!messageReply || messageReply.senderID !== api.getCurrentUserID()) return;

  const userQuery = body.trim();

  // **
  if (!userMemory[senderID]) userMemory[senderID] = [];

  // **
  const conversationHistory = userMemory[senderID].join("\n");
  const fullQuery = conversationHistory + `\nUser: ${userQuery}\nBot:`;

  // ****
  const apiURL = `https://shankar-gpt-3-api.vercel.app/api?message=${encodeURIComponent(fullQuery)}`;

  try {
    const response = await axios.get(apiURL);
    let botReply = response.data.response || "MeKo Samjh Nhi Aya SaHi Seh Blo 😏";

    // **
    userMemory[senderID].push(`User: ${userQuery}`);
    userMemory[senderID].push(`Bot: ${botReply}`);
    if (userMemory[senderID].length > 15) userMemory[senderID].splice(0, 2);

    return api.sendMessage({
      body: botReply,
      mentions: [{
        tag: "Bot",
        id: api.getCurrentUserID()
      }]
    }, threadID, messageID);
  } catch (error) {
    console.error("API Error:", error.message);
    return api.sendMessage("MoYe MoYe", threadID, messageID);
  }
};

// **
module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const command = args[0] && args[0].toLowerCase();

  if (command === "on") {
    isActive = true;
    return api.sendMessage("✅ AuTo BOT is now active.", threadID, messageID);
  } else if (command === "off") {
    isActive = false;
    return api.sendMessage("⚠️ AuTo bot is Now Off", threadID, messageID);
  } else if (command === "clear") {
    if (args[1] && args[1].toLowerCase() === "all") {
      userMemory = {};
      return api.sendMessage("🧹 History of interactions of all users has been cleared.", threadID, messageID);
    }
    if (userMemory[senderID]) {
      delete userMemory[senderID];
      return api.sendMessage("🧹 History of your conversation has been cleared.", threadID, messageID);
    } else {
      return api.sendMessage("⚠️ None of your history already exist.", threadID, messageID);
    }
  }
};
