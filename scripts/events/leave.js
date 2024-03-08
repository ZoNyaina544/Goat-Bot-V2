const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "leave",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage(' 『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗘𝗔𝗩𝗘 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───⟡\n 𝗴𝗼𝗼𝗱𝗯𝘆𝗲 😘 \n __________', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
