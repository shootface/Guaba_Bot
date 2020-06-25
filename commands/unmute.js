const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You are a simple mortal, don't have permissions");
    if(!message.guild.me.hasPermission(["MANAGE_ROLES","ASMINISTRATOR"])) return message.channel.send("I am a simple mortal");
    let mutee = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!mutee) return message.channel.send("Please, provide a user to be muted")
    let reason = args[2];
    if(!reason) reason = "No reason given";
    let muterole = message.guild.roles.cache.find(r => r.name === "Muted");
    if(!muterole) return message.channel.send("There is no a mute role to remove")
    mutee.roles.remove(muterole).then(()=> {
        message.delete();
        mutee.send(`Hello, please be good. You have been unmuted in ${message.guild.name} for ${reason}`).catch(err => console.log(err));
    });
    let embed = new Discord.MessageEmbed()
    .setColor(colors.yellow)
    .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
    .addFields(
        {name: "Moderation:", value: "UnMuted"},
        {name: "Mutee:", value: `${mutee.user.username}`},
        {name: "Reason: ", value: `${reason}`},
        {name: "Moderator: ", value: `${message.author.username}`},
        {name: "Date: ",value: `${message.createdAt}`}
    )
    message.channel.send(embed);
}

module.exports.config = {
    name: "unmute",
    description: "Unmuted user from every textChannel",
    aliases: ["um","speak"],
    accessable: "Administrator",
    usage: `${botconfig.prefix}unmute <@user>`
}