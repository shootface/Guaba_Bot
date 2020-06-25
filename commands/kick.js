const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission(["KICK_MEMBERS","ADMINISTRATOR"])) return message.channel.send("You are a simple mortal, don't have permissions");
    if(!message.guild.me.hasPermission(["KICK_MEMBERS","ASMINISTRATOR"])) return message.channel.send("I am a simple mortal");
    let kickMember = message.mentions.members.first() || message.guild.members.get(args[1]);
    if(!kickMember) return message.channel.send("Please, provide a user to be baned");
    let reason = args[2];
    if(!reason) reason = "No reason given";
    message.delete();
    kickMember.send(`You are annoying. You have been kicked in ${message.guild.name} for ${reason}.See the rules on the server`).then(()=>{
        kickMember.kick(reason).catch(err => console.log(err));  
    }).catch(err => console.log(err));
    let embed = new Discord.MessageEmbed()
    .setColor(colors.red)
    .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
    .addFields(
        {name: "Moderation:", value: "Kicked"},
        {name: "Kicked:", value: `${kickMember.user.username}`},
        {name: "Reason: ", value: `${reason}`},
        {name: "Moderator: ", value: `${message.author.username}`},
        {name: "Date: ",value: `${message.createdAt}`}
    )
    message.channel.send(embed);
}

module.exports.config = {
    name: "kick", 
    description: "Kick a user from the Guild",
    aliases: ["k","Kick"],
    accessable: "Moderator",
    usage: `${botconfig.prefix}kick <@user>`
}