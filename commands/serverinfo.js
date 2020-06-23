const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed1 = new Discord.MessageEmbed()
    .setColor(colors.blue)
    .setTitle('Server Info')
    .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
    //.setDescription('Some description here')
    .setThumbnail(`${message.guild.iconURL()}`)
    .addFields(
        {name: 'Server name:', value: `${message.guild.name}`, inline: true },
        { name: 'Server Owner:', value: `${message.guild.owner}`, inline: true },
        { name: 'Member count:', value: `${message.guild.memberCount}`, inline: true },
        { name: 'Role aount:', value: `${message.guild.roles.cache.size}`, inline: true }
    )
    message.channel.send(embed1);
}
module.exports.config = {
    name: "serverinfo",
    description: "Info of the discord server",
    aliases: ["si","Si","sI","serverInfo"],
    accessable: "Members",
    usage: `${botconfig.prefix}serverinfo`
}