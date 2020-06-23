const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {

}

module.exports.config = {
    name: "unmute",
    description: "Unmuted user from every textChannel",
    aliases: ["um","speak"],
    usage: `${botconfig.prefix}unmute <@user>`
}