const { config } = global.GoatBot;
const { writeFileSync } = require("fs-extra");

module.exports = {
	config: {
		name: "admin",
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Thêm, xóa, sửa quyền admin",
			en: "Add, remove, edit admin role"
		},
		longDescription: {
			vi: "Thêm, xóa, sửa quyền admin",
			en: "Add, remove, edit admin role"
		},
		category: "box chat",
		guide: {
			vi: '   {pn} [add | -a] <uid | @tag>: Thêm quyền admin cho người dùng'
				+ '\n	  {pn} [remove | -r] <uid | @tag>: Xóa quyền admin của người dùng'
				+ '\n	  {pn} [list | -l]: Liệt kê danh sách admin',
			en: '   {pn} [add | -a] <uid | @tag>: Add admin role for user'
				+ '\n	  {pn} [remove | -r] <uid | @tag>: Remove admin role of user'
				+ '\n	  {pn} [list | -l]: List all admins'
		}
	},

	langs: {
		vi: {
			added: "✅ | Đã thêm quyền admin cho %1 người dùng:\n%2",
			alreadyAdmin: "\n⚠ | %1 người dùng đã có quyền admin từ trước rồi:\n%2",
			missingIdAdd: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn thêm quyền admin",
			removed: "✅ | Đã xóa quyền admin của %1 người dùng:\n%2",
			notAdmin: "⚠ | %1 người dùng không có quyền admin:\n%2",
			missingIdRemove: "⚠ | Vui lòng nhập ID hoặc tag người dùng muốn xóa quyền admin",
			listAdmin: "👑 | Danh sách admin:\n%1"
		},
		en: {
			added: "『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗗𝗠𝗜𝗡』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───⟡\n  ✅ | 𝑨𝒅𝒅𝒆𝒅 𝒂𝒅𝒎𝒊𝒏 𝒓𝒐𝒍𝒆 𝒇𝒐𝒓 %1 𝒖𝒔𝒆𝒓𝒔:\n%2",
			alreadyAdmin: "\n⚠ | %1 𝒖𝒔𝒆𝒓𝒔 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒉𝒂𝒗𝒆 𝒂𝒅𝒎𝒊𝒏 𝒓𝒐𝒍𝒆:\n%2",
			missingIdAdd: "⚠ | Please enter ID or tag user to add admin role",
			removed: "『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗗𝗠𝗜𝗡』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───⟡\n   ✅ | 𝑹𝒆𝒎𝒐𝒗𝒆𝒅 𝒂𝒅𝒎𝒊𝒏 𝒓𝒐𝒍𝒆 𝒐𝒇 %1 𝒖𝒔𝒆𝒓𝒔:\n%2",
			notAdmin: "『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗗𝗠𝗜𝗡』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───⟡\n ⚠ | %1 𝒖𝒔𝒆𝒓𝒔 𝒅𝒐𝒏'𝒕 𝒉𝒂𝒗𝒆 𝒂𝒅𝒎𝒊𝒏 𝒓𝒐𝒍𝒆:\n%2",
			missingIdRemove: "『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗗𝗠𝗜𝗡』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───⟡\n ⚠ | 𝑷𝒍𝒆𝒂𝒔𝒆 𝒆𝒏𝒕𝒆𝒓 𝑰𝑫 𝒐𝒓 𝒕𝒂𝒈 𝒖𝒔𝒆𝒓 𝒕𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 admin 𝒓𝒐𝒍𝒆",
			listAdmin: "『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗔𝗗𝗠𝗜𝗡』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───⟡\n  👑 | 𝑳𝒊𝒔𝒕 𝒐𝒇 𝒂𝒅𝒎𝒊𝒏𝒔:\n%1 \n ___________"
		}
	},

	onStart: async function ({ message, args, usersData, event, getLang }) {
		switch (args[0]) {
			case "add":
			case "-a": {
				if (args[1]) {
					let uids = [];
					if (Object.keys(event.mentions).length > 0)
						uids = Object.keys(event.mentions);
					else if (event.messageReply)
						uids.push(event.messageReply.senderID);
					else
						uids = args.filter(arg => !isNaN(arg));
					const notAdminIds = [];
					const adminIds = [];
					for (const uid of uids) {
						if (config.adminBot.includes(uid))
							adminIds.push(uid);
						else
							notAdminIds.push(uid);
					}

					config.adminBot.push(...notAdminIds);
					const getNames = await Promise.all(uids.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));
					writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));
					return message.reply(
						(notAdminIds.length > 0 ? getLang("added", notAdminIds.length, getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n")) : "")
						+ (adminIds.length > 0 ? getLang("alreadyAdmin", adminIds.length, adminIds.map(uid => `• ${uid}`).join("\n")) : "")
					);
				}
				else
					return message.reply(getLang("missingIdAdd"));
			}
			case "remove":
			case "-r": {
				if (args[1]) {
					let uids = [];
					if (Object.keys(event.mentions).length > 0)
						uids = Object.keys(event.mentions)[0];
					else
						uids = args.filter(arg => !isNaN(arg));
					const notAdminIds = [];
					const adminIds = [];
					for (const uid of uids) {
						if (config.adminBot.includes(uid))
							adminIds.push(uid);
						else
							notAdminIds.push(uid);
					}
					for (const uid of adminIds)
						config.adminBot.splice(config.adminBot.indexOf(uid), 1);
					const getNames = await Promise.all(adminIds.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));
					writeFileSync(global.client.dirConfig, JSON.stringify(config, null, 2));
					return message.reply(
						(adminIds.length > 0 ? getLang("removed", adminIds.length, getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n")) : "")
						+ (notAdminIds.length > 0 ? getLang("notAdmin", notAdminIds.length, notAdminIds.map(uid => `• ${uid}`).join("\n")) : "")
					);
				}
				else
					return message.reply(getLang("missingIdRemove"));
			}
			case "list":
			case "-l": {
				const getNames = await Promise.all(config.adminBot.map(uid => usersData.getName(uid).then(name => ({ uid, name }))));
				return message.reply(getLang("listAdmin", getNames.map(({ uid, name }) => `• ${name} (${uid})`).join("\n")));
			}
			default:
				return message.SyntaxError();
		}
	}
};
