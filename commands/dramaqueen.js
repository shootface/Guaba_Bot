const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {
    message.channel.send("-queue");
}

module.exports.config = {
    name: "dramaqueen", 
    description: "play song for Jose",
    aliases: ["DQ","Drama"],
    accessable: "Administrator",
    usage: `${botconfig.prefix}DramaQueen <@user>`
}