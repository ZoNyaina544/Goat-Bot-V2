const { getStreamsFromAttachment, log } = global.utils;
const mediaTypes = ["photo", 'png', "animated_image", "video", "audio"];

module.exports = {
	config: {
		name: "callad",
		version: "1.6",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "gửi tin nhắn về admin bot",
			en: "send message to admin bot"
		},
		longDescription: {
			vi: "gửi báo cáo, góp ý, báo lỗi,... của bạn về admin bot",
			en: "send report, feedback, bug,... to admin bot"
		},
		category: "contacts admin",
		guide: {
			vi: "   {pn} <tin nhắn>",
			en: "   {pn} <message>"
		}
	},

	langs: {
		vi: {
			missingMessage: "Vui lòng nhập tin nhắn bạn muốn gửi về admin",
			sendByGroup: "\n- Được gửi từ nhóm: %1\n- Thread ID: %2",
			sendByUser: "\n- Được gửi từ người dùng",
			content: "\n\nNội dung:\n─────────────────\n%1\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			success: "Đã gửi tin nhắn của bạn về %1 admin thành công!\n%2",
			failed: "Đã có lỗi xảy ra khi gửi tin nhắn của bạn về %1 admin\n%2\nKiểm tra console để biết thêm chi tiết",
			reply: "📍 Phản hồi từ admin %1:\n─────────────────\n%2\n─────────────────\nPhản hồi tin nhắn này để tiếp tục gửi tin nhắn về admin",
			replySuccess: "Đã gửi phản hồi của bạn về admin thành công!",
			feedback: "📝 Phản hồi từ người dùng %1:\n- User ID: %2%3\n\nNội dung:\n─────────────────\n%4\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			replyUserSuccess: "Đã gửi phản hồi của bạn về người dùng thành công!",
			noAdmin: "Hiện tại bot chưa có admin nào"
		},
		en: {
			missingMessage: "𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐞𝐧𝐝 𝐭𝐨 𝐚𝐝𝐦𝐢𝐧",
			sendByGroup: "\n- Sent from group: %1\n- 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃: %2",
			sendByUser: "\n- 𝐬𝐞𝐧𝐝 𝐟𝐫𝐨𝐦 𝐮𝐬𝐞𝐫",
			content: "\n\n 𝐂𝐨𝐧𝐭𝐞𝐧𝐭:\n─────────────────\n%1\n─────────────────\n 𝐑𝐞𝐩𝐥𝐲 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐬𝐞𝐧𝐝 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐮𝐬𝐞𝐫",
			success: "『𝗖𝗢𝗠𝗠𝗔𝗡𝗗   𝗖𝗔𝗟𝗟𝗔𝗗 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝐒𝐞𝐧𝐭 𝐲𝐨𝐮𝐫 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 %1 𝐚𝐝𝐦𝐢𝐧 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲!\n%2 \n _________________________",
			𝐟𝐚𝐢𝐥𝐞𝐝: "𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐫𝐞𝐝 𝐰𝐡𝐢𝐥𝐞 𝐬𝐞𝐧𝐝𝐢𝐧𝐠 𝐲𝐨𝐮𝐫 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 %1 𝐚𝐝𝐦𝐢𝐧\n%2\n 𝐂𝐡𝐞𝐜𝐤 𝐜𝐨𝐧𝐬𝐨𝐥𝐞 𝐟𝐨𝐫 𝐦𝐨𝐫𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬",
			reply: "『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗖𝗔𝗟𝗟𝗔𝗗 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡\n 𝐑𝐞𝐩𝐥𝐲 𝐟𝐫𝐨𝐦 𝐚𝐝𝐦𝐢𝐧 %1:\n─────────────────\n%2\n─────────────────\n 𝑹𝒆𝒑𝒍𝒚 𝒕𝒉𝒊𝒔 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒕𝒐 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒆 𝒔𝒆𝒏𝒅 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒕𝒐\n •%1",
			replySuccess: "𝑺𝒆𝒏𝒕 𝒚𝒐𝒖𝒓 𝒓𝒆𝒑𝒍𝒚 𝒕𝒐 𝒂𝒅𝒎𝒊𝒏 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚!",
			feedback: "『 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗖𝗔𝗟𝗟𝗔𝗗 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡  %1:\n- 𝑼𝒔𝒆𝒓 𝑰𝑫: %2%3\n\n 𝑪𝒐𝒏𝒕𝒆𝒏𝒕:\n─────────────────\n%4\n─────────────────\n 𝑹𝒆𝒑𝒍𝒚 𝒕𝒉𝒊𝒔 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒕𝒐  𝒔𝒆𝒏𝒅 𝒎𝒆𝒔𝒔𝒂𝒈𝒆 𝒕𝒐 \n •%1",
			replyUserSuccess: "𝑺𝒆𝒏𝒕 𝒚𝒐𝒖𝒓 𝒓𝒆𝒑𝒍𝒚 𝒕𝒐 𝒖𝒔𝒆𝒓 𝒔𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚!",
			noAdmin: "𝑩𝒐𝒕 𝒉𝒂𝒔 𝒏𝒐 𝒂𝒅𝒎𝒊𝒏 𝒂𝒕 𝒕𝒉𝒆 𝒎𝒐𝒎𝒆𝒏𝒕"
		}
	},

	onStart: async function ({ args, message, event, usersData, threadsData, api, commandName, getLang }) {
		const { config } = global.GoatBot;
		if (!args[0])
			return message.reply(getLang("missingMessage"));
		const { senderID, threadID, isGroup } = event;
		if (config.adminBot.length == 0)
			return message.reply(getLang("noAdmin"));
		const senderName = await usersData.getName(senderID);
		const msg = "『𝗖𝗢𝗠𝗠𝗔𝗡𝗗   𝗖𝗔𝗟𝗟𝗔𝗗 』\n♡  ∩_∩\n（„• ֊ •„)♡\n╭─∪∪───────────⟡"
			+ `\n- 𝑼𝑺𝑬𝑹 𝑵𝑨𝑴𝑬: ${senderName}`
			+ `\n- 𝑼𝑺𝑬𝑹 𝑰𝑫: ${senderID}`
			+ (isGroup ? getLang("sendByGroup", (await threadsData.get(threadID)).threadName, threadID) : getLang("sendByUser"));

		const formMessage = {
			body: msg + getLang("content", args.join(" ")),
			mentions: [{
				id: senderID,
				tag: senderName
			}],
			attachment: await getStreamsFromAttachment(
				[...event.attachments, ...(event.messageReply?.attachments || [])]
					.filter(item => mediaTypes.includes(item.type))
			)
		};

		const successIDs = [];
		const failedIDs = [];
		const adminNames = await Promise.all(config.adminBot.map(async item => ({
			id: item,
			name: await usersData.getName(item)
		})));

		for (const uid of config.adminBot) {
			try {
				const messageSend = await api.sendMessage(formMessage, uid);
				successIDs.push(uid);
				global.GoatBot.onReply.set(messageSend.messageID, {
					commandName,
					messageID: messageSend.messageID,
					threadID,
					messageIDSender: event.messageID,
					type: "userCallAdmin"
				});
			}
			catch (err) {
				failedIDs.push({
					adminID: uid,
					error: err
				});
			}
		}

		let msg2 = "";
		if (successIDs.length > 0)
			msg2 += getLang("success", successIDs.length,
				adminNames.filter(item => successIDs.includes(item.id)).map(item => ` <@${item.id}> (${item.name})`).join("\n")
			);
		if (failedIDs.length > 0) {
			msg2 += getLang("failed", failedIDs.length,
				failedIDs.map(item => ` <@${item.adminID}> (${adminNames.find(item2 => item2.id == item.adminID)?.name || item.adminID})`).join("\n")
			);
			log.err("CALL ADMIN", failedIDs);
		}
		return message.reply({
			body: msg2,
			mentions: adminNames.map(item => ({
				id: item.id,
				tag: item.name
			}))
		});
	},

	onReply: async ({ args, event, api, message, Reply, usersData, commandName, getLang }) => {
		const { type, threadID, messageIDSender } = Reply;
		const senderName = await usersData.getName(event.senderID);
		const { isGroup } = event;

		switch (type) {
			case "userCallAdmin": {
				const formMessage = {
					body: getLang("reply", senderName, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replyUserSuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "adminReply"
					});
				}, messageIDSender);
				break;
			}
			case "adminReply": {
				let sendByGroup = "";
				if (isGroup) {
					const { threadName } = await api.getThreadInfo(event.threadID);
					sendByGroup = getLang("sendByGroup", threadName, event.threadID);
				}
				const formMessage = {
					body: getLang("feedback", senderName, event.senderID, sendByGroup, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replySuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "userCallAdmin"
					});
				}, messageIDSender);
				break;
			}
			default: {
				break;
			}
		}
	}
};
