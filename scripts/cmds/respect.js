module.exports = {
  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "Tsiaro Sama",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },

  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);

      const permission = ["100071761961640","100060044509697"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "𝗬𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗮𝘂𝘁𝗼𝗿𝗶𝘇𝗲𝗱 𝘁𝗼 𝗱𝗼 𝘁𝗵𝗶𝘀, 𝗶 𝗿𝗲𝘀𝗽𝗲𝗰𝘁 𝗺𝘆 𝘀𝗲𝗻𝗽𝗮𝗶 𝗼𝗻𝗹𝘆 ಥ⁠‿⁠ಥ",
          event.threadID,
          event.messageID
        );
      }

      const threadID = event.threadID;
      const adminID = event.senderID;
      
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);

      api.sendMessage(
        `『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗥𝗘𝗦𝗣𝗘𝗖𝗧 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝗬𝗼𝘂𝗿 𝘄𝗶𝘀𝗵𝗲𝘀 𝗮𝗿𝗲 𝗮 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝗦𝗲𝗻𝗽𝗮𝗶(⁠ ⁠˘⁠ ⁠³⁠˘⁠)⁠♥ \n __________________________.`,
        threadID
      );
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      api.sendMessage("『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗥𝗘𝗦𝗣𝗘𝗖𝗧 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝗦𝗼𝗿𝗿𝘆 𝘀𝗲𝗻𝗽𝗮𝗶 𝗯𝘂𝘁 i'𝗺 𝗻𝗼𝘁 𝗮𝗱𝗺𝗶𝗻 𝘁𝗼 𝘁𝗵𝗶𝘀 𝘁𝗵𝗿𝗲𝗮𝗱 \n __________________________ (⁠ᗒ⁠ᗩ⁠ᗕ⁠).", event.threadID);
    }
  },
};
