const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');

function getUserFromMention(client,mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}

module.exports.getUserFromMention = getUserFromMention;