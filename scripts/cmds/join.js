module.exports = {
 config: {
  name: "join",
  version: "1.0.0",
  author: "kazu.kinoshita",
  countDown: 5,
    role: 2,
  shortDescription: "add user to the group",
  usages: "Join <threadID>",
  category: "chat box",
},
langs: {
		en: {
			hello: "Hi this join command is still in development",
			helloWithName: ""
		},// English language
	},
  onStart: async function ({ api, event, args }) {
    const threadID = args.join(""); 
    const senderID = event.senderID;

    try {
      await api.addUserToGroup(senderID, threadID);
      api.sendMessage(`『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗝𝗢𝗜𝗡 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n  𝒀𝒐𝒖 𝒉𝒂𝒗𝒆 𝒃𝒆𝒆𝒏 𝒂𝒅𝒅𝒆𝒅 𝒕𝒐 𝒕𝒉𝒆 “${threadID}” 𝒈𝒓𝒐𝒖𝒑.🥰 𝑰𝒇 𝒚𝒐𝒖 𝒅𝒐𝒏'𝒕 𝒔𝒆𝒆 𝒕𝒉𝒆 𝒈𝒓𝒐𝒖𝒑 𝒄𝒉𝒂𝒕 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒕𝒓𝒚 𝒇𝒊𝒏𝒅 𝒊𝒕 𝒊𝒏 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕𝒔\n ____________________________`, event.threadID);
    } catch (e) {
      api.sendMessage(`『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗝𝗢𝗜𝗡 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n •𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒓𝒆𝒅 𝒘𝒉𝒊𝒍𝒆 𝒂𝒅𝒅𝒊𝒏𝒈 𝒚𝒐𝒖 𝒕𝒐 𝒕𝒉𝒆 “${threadID}” 𝒈𝒓𝒐𝒖𝒑.\n • 𝑷𝒍𝒆𝒂𝒔𝒆 𝒎𝒂𝒌𝒆 𝒔𝒖𝒓𝒆 𝒕𝒉𝒂𝒕 𝒚𝒐𝒖𝒓 𝒂 𝒇𝒓𝒊𝒆𝒏𝒅 𝒊𝒇 𝒕𝒉𝒊𝒔 𝒃𝒐𝒕 𝒊𝒏 𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌 \n • 𝒎𝒂𝒌𝒆 𝒔𝒖𝒓𝒆 𝒕𝒉𝒂𝒕 𝒕𝒉𝒆 𝒃𝒐𝒕 𝒊𝒔 𝒂𝒕 𝒕𝒉𝒂𝒕 𝒈𝒓𝒐𝒖𝒑 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕 𝒕𝒐 𝒂𝒅𝒅 𝒚𝒐𝒖 \n •𝒊𝒇 𝒕𝒉𝒂𝒕 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒂𝒅𝒎𝒊𝒏 𝒂𝒑𝒑𝒓𝒐𝒗𝒂𝒍 𝒊𝒕 𝒔𝒉𝒐𝒖𝒍𝒅 𝒑𝒆𝒏𝒅𝒊𝒏𝒈 𝒊𝒏 𝒚𝒐𝒖𝒓 𝒓𝒆𝒒𝒖𝒆𝒔𝒕𝒆𝒅 𝒈𝒓𝒐𝒖𝒑. \n ____________________________`, event.threadID);
    }
  }
};
