module.exports = {
  config: {
    name: "topexp",
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "Top 15 Exp users"
    },
    longDescription: {
      en: ""
    },
    category: "group",
    guide: {
      en: "{pn}"
    }
  },
  onStart: async function ({ api, args, message, event, usersData }) {
    const allUsers = await usersData.getAll();
    
    // Filter out users with no experience points
    const usersWithExp = allUsers.filter(user => user.exp > 0);

    if (usersWithExp.length < 1) {
      message.reply("𝑻𝒉𝒆𝒓𝒆 𝒂𝒓𝒆 𝒏𝒐𝒕 𝒆𝒏𝒐𝒖𝒈𝒉 𝒖𝒔𝒆𝒓𝒔 𝒘𝒊𝒕𝒉 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆 𝒑𝒐𝒊𝒏𝒕𝒔 𝒕𝒐 𝒅𝒊𝒔𝒑𝒍𝒂𝒚 𝒂 𝒕𝒐𝒑 5.");
      return;
    }
    
    const topExp = usersWithExp.sort((a, b) => b.exp - a.exp).slice(0, 15);
    
    const topUsersList = topExp.map((user, index) => `${index + 1}. ${user.name}: ${user.exp}🎁\n`);
    
    const messageText = `『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗧𝗢𝗣𝗘𝗫𝗣 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪──────⟡\n 𝑻𝒐𝒑 15 𝑹𝒂𝒏𝒌 𝑼𝒔𝒆𝒓𝒔:\n${topUsersList.join('\n')}`;
    
    message.reply(messageText);
  }
};
