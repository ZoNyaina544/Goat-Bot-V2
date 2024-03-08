module.exports = {
  config: {
    name: "uptime",
aliases: ["upt"],
    version: "1.0",
    author: "kazu.kinoshita",
    role: 0,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();
      
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;
      
      api.sendMessage(` 『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗨𝗣𝗧𝗜𝗠𝗘 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\\n⏰ | 𝑻𝑰𝑴𝑬\n☞ 【${uptimeString}】\n\n👪 | 𝑼𝑺𝑬𝑹𝑺\n☞ 【${allUsers.length}】\n\n🪅 | 𝑻𝑯𝑹𝑬𝑨𝑫𝑺\n☞ 【${allThreads.length}】\n __________________________`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
