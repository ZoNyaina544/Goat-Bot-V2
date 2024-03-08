module.exports = {
  config: {
    name: "antiout",
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "Enable or disable antiout",
    longDescription: "",
    category: "boxchat",
    guide: "{pn} {{[on | off]}}",
    envConfig: {
      deltaNext: 5
    }
  },
  onStart: async function({ message, event, threadsData, args }) {
    let antiout = await threadsData.get(event.threadID, "settings.antiout");
    if (antiout === undefined) {
      await threadsData.set(event.threadID, true, "settings.antiout");
      antiout = true;
    }
    if (!["on", "off"].includes(args[0])) {
      return message.reply("『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝑷𝒍𝒆𝒂𝒔𝒆 𝒖𝒔𝒆 'on' 𝒐𝒓 'off' 𝒂𝒔 𝒂𝒏 𝒂𝒓𝒈𝒖𝒎𝒆𝒏𝒕 \n _________________________");
    }
    await threadsData.set(event.threadID, args[0] === "on", "settings.antiout");
    return message.reply(`『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝑨𝒏𝒕𝒊𝒐𝒖𝒕 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 ${args[0] === "on" ? "𝒆𝒏𝒂𝒃𝒍𝒆𝒅" : "𝒅𝒊𝒔𝒂𝒃𝒍𝒆𝒅"}. \n _______________________`);
  },
  onEvent: async function({ api, event, threadsData }) {
    const antiout = await threadsData.get(event.threadID, "settings.antiout");
    if (antiout && event.logMessageData && event.logMessageData.leftParticipantFbId) {
      // A user has left the chat, get their user ID
      const userId = event.logMessageData.leftParticipantFbId;

      // Check if the user is still in the chat
      const threadInfo = await api.getThreadInfo(event.threadID);
      const userIndex = threadInfo.participantIDs.indexOf(userId);
      if (userIndex === -1) {
        // The user is not in the chat, add them back
        const addUser = await api.addUserToGroup(userId, event.threadID);
        if (addUser) {
          console.log(`『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝑼𝒔𝒆𝒓 ${userId} 𝒘𝒂𝒔 𝒂𝒅𝒅𝒆𝒅 𝒃𝒂𝒄𝒌 𝒕𝒐 𝒕𝒉𝒆 𝒄𝒉𝒂𝒕.\n _________________________`);
        } else {
          console.log(`『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗡𝗧𝗜𝗢𝗨𝗧 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝑭𝒂𝒊𝒍𝒆𝒅 𝒕𝒐 𝒂𝒅𝒅 𝒖𝒔𝒆𝒓 ${userId} 𝒃𝒂𝒄𝒌 𝒕𝒐 𝒕𝒉𝒆 𝒄𝒉𝒂𝒕.\n ________________________`);
        }
      }
    }
  }
};
