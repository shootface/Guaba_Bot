const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {

}

module.exports.config = {
    name: "say", 
    description: "Ban a user from the Guild",
    aliases: ["b","Ban","remove"],
    accessable: "Administrator",
    usage: `${botconfig.prefix}ban <@user>`
}