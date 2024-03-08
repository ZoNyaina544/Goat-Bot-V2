const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "clear",
    aliases: ["Samir B. Thakuri"],
    version: "1.0",
    author: "Samir B. Thakuri",
    countDown: 5,
    role: 2,
    shortDescription: "Delete all files in subdirectories",
    longDescription: "Delete all files in subdirectories",
    category: "owner",
    guide: "{pn}"
  },

  onStart: async function ({ args, message, api, event }) {
    const directoriesToDelete = ['cache', 'tmp'];

    try {
      console.log("Starting deletion process...");
      for (const directory of directoriesToDelete) {
        const directoryPath = path.join(__dirname, directory);
        const files = fs.readdirSync(directoryPath);

        for (const file of files) {
          const filePath = path.join(directoryPath, file);
          const fileStat = fs.statSync(filePath);

          if (fileStat.isFile()) {
            fs.unlinkSync(filePath);
            console.log(`Deleted file: ${filePath}`);
          }
        }
      }
      console.log("Deletion process completed successfully!");

      const deletedFilesCount = directoriesToDelete.reduce((total, dir) => {
        const directoryPath = path.join(__dirname, dir);
        const files = fs.readdirSync(directoryPath);
        return total + files.length;
      }, 0);

      api.sendMessage(` 『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗕𝗔𝗟𝗔𝗡𝗖𝗔 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝑫𝒆𝒍𝒆𝒕𝒆𝒅 𝑨𝒍𝒍 𝑼𝒏𝒘𝒂𝒏𝒕𝒆𝒅 𝑪𝒂𝒄𝒉𝒆𝒔 𝑨𝒏𝒅 𝑻𝒆𝒎𝒑 𝑭𝒊𝒍𝒆(s) 𝑭𝒓𝒐𝒎 𝑷𝒓𝒐𝒋𝒆𝒄𝒕 \n _________________________`, event.threadID);
    } catch (err) {
      console.error(err);
      api.sendMessage(`『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗖𝗟𝗘𝗔𝗥』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒓𝒆𝒅 𝒘𝒉𝒊𝒍𝒆 𝒅𝒆𝒍𝒆𝒕𝒊𝒏𝒈 𝒇𝒊𝒍𝒆𝒔: ${err.message} \n _________________________`, event.threadID);
    }
  }
};
