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
          "𝒀𝒐𝒖 𝒅𝒐𝒏'𝒕 𝒉𝒂𝒗𝒆 𝒂𝒏𝒚 𝒂𝒖𝒕𝒐𝒓𝒊𝒔𝒂𝒕𝒊𝒐𝒏𝒔 𝒕𝒐 𝒅𝒐 𝒕𝒉𝒊𝒔 , 𝒊 𝒓𝒆𝒔𝒑𝒆𝒄𝒕 𝒎𝒚 𝒔𝒆𝒏𝒑𝒂𝒊 𝒐𝒏𝒍𝒚  ಥ⁠‿⁠ಥ",
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
