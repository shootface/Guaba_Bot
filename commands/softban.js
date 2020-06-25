const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS","ADMINISTRATOR"])) return message.channel.send("You are a simple mortal, don't have permissions");
    if(!message.guild.me.hasPermission(["BAN_MEMBERS","ASMINISTRATOR"])) return message.channel.send("I am a simple mortal");
    let banMember = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!banMember) return message.channel.send("Please, provide a user to be baned");
    let reason = args[2];
    if(!reason) reason = "No reason given";
    message.delete();
    banMember.send(`You are a really piece of shit. You have been baned in ${message.guild.name} for ${reason}.See the rules on the server`).then(()=>{
        message.guild.ban(banMember,{days:1,reason: reason}).then(message.guild.unban(banMember.id,{reason: "SoftBan"})).catch(err => console.log(err));
    });
    let embed = new Discord.MessageEmbed()
    .setColor(colors.red)
    .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
    .addFields(
        {name: "Moderation:", value: "Banded"},
        {name: "Member:", value: `${banMember.user.username}`},
        {name: "Reason: ", value: `${reason}`},
        {name: "Moderator: ", value: `${message.author.username}`},
        {name: "Date: ",value: `${message.createdAt}`}
    )
    message.channel.send(embed);
}

module.exports.config = {
    name: "softban", 
    description: "soft a user from the Guild",
    aliases: ["b","Ban","remove"],
    accessable: "Administrator",
    usage: `${botconfig.prefix}ban <@user>`
}