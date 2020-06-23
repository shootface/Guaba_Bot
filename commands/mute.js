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
    if(!muterole){
        try{
            muterole = await message.guild.roles.create({
                data:{
                    name: "Muted",
                    color: colors.yellow,
                    permissions: []
                }
            });
            message.guild.channels.cache.every(async (channel,id) => {
                await channel.updateOverwrite(muterole,{
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILE: false,
                    SPEAK: false
                })
            });
        }catch(e){
            console.log(e.stack);
        }
    }
    mutee.roles.add(muterole).then(()=> {
        message.delete();
        mutee.send(`Hello, retard. You have been muted in ${message.guild.name} for ${reason}.See the rules on the server`);
        //message.channel.send(`${mutee.user.username} was muted.`);
    });

    let embed = new Discord.MessageEmbed()
    .setColor(colors.red)
    .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
    .addFields(
        {name: "Moderation:", value: "Muted"},
        {name: "Mutee:", value: `${mutee.user.username}`},
        {name: "Reason: ", value: `${reason}`},
        {name: "Moderator: ", value: `${message.author.username}`},
        {name: "Date: ",value: `${message.createdAt}`}
    )
    message.channel.send(embed);
}

module.exports.config = {
    name: "mute", 
    description: "Muted user from every textChannel",
    aliases: ["m","nonspeak"],
    usage: `${botconfig.prefix}mute <@user>`
}