const axios = require('axios');

const Prefixes = [
  'ai',
  'Tsiaro',
  'goat',
];

// Fonction pour changer la police d'écriture
function transformText(text) {
  const replacements = {
    a: "𝘢",
    b: "𝘣",
    c: "𝘤",
    d: "𝘥",
    e: "𝘦",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "𝘬",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘱",
    q: "𝘲", 
    r: "𝘳",
    s: "𝘴",
    t: "𝘵",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "𝘺",
    z: "𝘻",

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

      await message.reply(transformedAnswer + "\n✰━━━━━━━━━━━✰\n [𝘊𝘏𝘐𝘡𝘜 𝘏𝘈𝘠𝘈𝘚𝘌]\n✰━━━━━━━━━━━✰");

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
