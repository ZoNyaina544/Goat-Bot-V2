 const axios = require('axios');

const Prefixes = [
  'ai',
  'Tsiaro',
  'goat',
];

// Fonction pour changer la police d'écriture
function transformText(text) {
  const replacements = {
    a: "𝗮",
    b: "𝗯",
    c: "𝗰",
    d: "𝗱",
    e: "𝗲",
    f: "𝗳",
    g: "𝗴",
    h: "𝗵",
    i: "𝗶",
    j: "𝗷",
    k: "𝗸",
    l: "𝗹",
    m: "𝗺",
    n: "𝗻",
    o: "𝗼",
    p: "𝗽",
    q: "𝗾", 
    r: "𝗿",
    s: "𝘀",
    t: "𝘁",
    u: "𝘂",
    v: "𝘃",
    w: "𝘄",
    x: "𝘅",
    y: "𝘆",
    z: "𝘇",
    A: "𝗔̀", 
    B: "𝗕", 
    C: "𝗖", 
    D: "𝗗", 
    E: "𝗘", 
    F: "𝗙", 
    G: "𝗚", 
    H: "𝗛", 
     I: "𝗜", 
    J: "𝗝", 
    K: "𝗞", 
    L: "𝗟", 
   M: "𝗠"
   N: "𝗡", 
   O: "𝗢", 
   P: "𝗣", 
   Q: "𝗤", 
   R: "𝗥", 
   S: "𝗦", 
   T: "𝗧", 
   U: "𝗨", 
   V: "𝗩", 
  W: "𝗪",
   X: "𝗫",
   Y: "𝗬", 
   Z: "𝗭", 
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
        await message.reply("✰━━━━━━━━━━━✰\n [𝗖𝗛𝗜𝗭𝗨 𝗛𝗔𝗬𝗔𝗦𝗘]\n•➪ ${User Name} \n 𝙄'𝙢 𝙊𝙠 𝙩𝙤 𝙖𝙣𝙨𝙬𝙚𝙧 𝙖𝙡𝙡 𝙤𝙛 𝙮𝙤𝙪𝙧 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣 ⇦\n✰━━━━━━━━━━━✰");
        return;
      }

      const response = await axios.get(`https://sandipapi.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;
      const transformedAnswer = transformText(answer);

      await message.reply(transformedAnswer + "\n✰━━━━━━━━━━━✰\n🧠[𝗖𝗛𝗜𝗭𝗨 
𝗛𝗔𝗬𝗔𝗦𝗘]\n✰━━━━━━━━━━━✰");

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
