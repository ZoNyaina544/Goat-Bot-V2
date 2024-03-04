const axios = require('axios');

const Prefixes = [
  'ai',
  'Tsiaro',
  'goat',
];

// Fonction pour changer la police d'écriture
function transformText(text) {
  const replacements = {
    a: "𝑎",
    b: "𝑏",
    c: "𝑐",
    d: "𝑑",
    e: "𝑒",
    f: "𝑓",
    g: "𝑔",
    h: "ℎ",
    i: "𝑖",
    j: "𝑗",
    k: "𝑘",
    l: "𝑙",
    m: "𝑚",
    n: "𝑛",
    o: "𝑜",
    p: "𝑝",
    q: "𝑞", 
    r: "𝑟",
    s: "𝑠",
    t: "𝑡",
    u: "𝑢",
    v: "𝑣",
    w: "𝑤",
    x: "𝑥",
    y: "𝑦",
    z: "𝑧",

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
        await message.reply("𝐼'𝑚 𝑜𝑘 𝑡𝑜 𝑎𝑛𝑠𝑤𝑒𝑟 𝑎𝑛𝑦 𝑞𝑢𝑒𝑠𝑡𝑖𝑜𝑛 ☚");
        return;
      }

      const response = await axios.get(`https://sandipapi.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;
      const transformedAnswer = transformText(answer);

      await message.reply(transformedAnswer + "\n✰━━━━━━━━━━━✰\n 𝑩𝒐𝒕 𝒕𝒆𝒔𝒕 𝑻𝒔𝒊𝒂𝒓𝒐\n✰━━━━━━━━━━━✰");

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
