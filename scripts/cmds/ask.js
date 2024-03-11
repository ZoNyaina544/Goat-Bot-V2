const axios = require('axios');

const Prefixes = [
  'Ai',
  'Tsiaro',
  'goat',
];

// Fonction pour changer la police d'écriture
function transformText(text) {
  const replacements = {
    a: "𝚊",
    b: "𝚋",
    c: "𝚌",
    d: "𝚍",
    e: "𝚎",
    f: "𝚏",
    g: "𝚐",
    h: "𝚑",
    i: "𝚒",
    j: "𝚓",
    k: "𝚔",
    l: "𝚕",
    m: "𝚖",
    n: "𝚗",
    o: "𝚘",
    p: "𝚙",
    q: "𝚚", 
    𝚛: "𝚛", 
    s: "𝚜",
    t: "𝚝",
    u: "𝚞",
    v: "𝚟",
    w: "𝚠",
    x: "𝚡",
    y: "𝚢",
    z: "𝚣",
    // Ajoutez d'autres remplacements au besoin
  };

  const transformedText = text.toLowerCase().split('').map(char => {
    const replacement = replacements[char];
    return replacement !== undefined ? replacement : char;
  }).join('');

  return transformedText;
}

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "Anderlias",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Préfixe invalide, ignorez la commande
      }

      const prompt = event.body.substring(prefix.length).trim();
      if (!prompt) {
        await message.reply("✰━━━━━━━━━━━✰\n➪ [𝗖𝗛𝗜𝗭𝗨 𝗛𝗔𝗬𝗔𝗦𝗘] \n 𝙄'𝙢 𝙊𝙠 𝙩𝙤 𝙖𝙣𝙨𝙬𝗲𝗿 𝙖𝙡𝙡 𝙤𝙛 𝙮𝙤𝙪𝙧 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣.\n✰━━━━━━━━━━━✰");
        return;
      }

      const response = await axios.get(`https://sandipapi.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;
      const transformedAnswer = transformText(answer);

      await message.reply(transformedAnswer + "\n✰━━━━━━━━━━━✰\n 𝗖𝗛𝗜𝗭𝗨 𝗛𝗔𝗬𝗔𝗦𝗘\n✰━━━━━━━━━━━✰");

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
