const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS","ADMINISTRATOR"])) return message.channel.send("You are a simple mortal, don't have permissions");
    if(!message.guild.me.hasPermission(["BAN_MEMBERS","ASMINISTRATOR"])) return message.channel.send("I am a simple mortal");
    let banendMember = await client.users.fetch(args[1]);
    if(!banendMember) return message.channel.send("Please, provide a user to unbandes someone");
    let reason = args[2];
    if(!reason) reason = "No reason given";
    message.delete();
    try{
        message.guild.members.unban(banendMember,{reason: reason});
        banendMember.send(`We love you again. You have been unbaned in ${message.guild.name} for ${reason}.Please come back`);
    } catch(e){

    }
    let embed = new Discord.MessageEmbed()
    .setColor(colors.red)
    .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
    .addFields(
        {name: "Moderation:", value: "Unbanded"},
        {name: "Banend:", value: `${banendMember.username}`},
        {name: "Reason: ", value: `${reason}`},
        {name: "Moderator: ", value: `${message.author.username}`},
        {name: "Date: ",value: `${message.createdAt}`}
    )
    message.channel.send(embed);
}

module.exports.config = { 
    name: "unban", 
    description: "Ban a user from the Guild",
    aliases: ["ub","Unban","unremove"],
    accessable: "Administrator",
    usage: `${botconfig.prefix}ban <@user>`
}