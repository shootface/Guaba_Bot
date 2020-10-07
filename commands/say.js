const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {
    let author = "";
    console.log(args[1]);
    if(args[1]){
        author = util.getUserFromMention(client,args[1]);
    }
    let embed = new Discord.MessageEmbed()
    .setColor(colors.blue)
    .setTitle(args[2])
    .setURL('https://dev103289.service-now.com/')
    .setAuthor(args[3], `${botconfig.guabaicon}`)
    .setDescription('Has been invited to')
    .setThumbnail(`${author.displayAvatarURL()}`)
    .addFields(
        {name: 'User:', value: `${author.username}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Event number:', value: args[4]}
    )
    //.setImage(`${botconfig.guabaicon}`)
    .setTimestamp()
    .setFooter('',  `${botconfig.guabaicon}`);
    message.channel.send(embed);
}

module.exports.config = {
    name: "say", 
    description: "Say someting on the textChannel",
    aliases: ["s","Say","say"],
    accessable: "Administrator",
    usage: `${botconfig.prefix}ban <@user>`
}

//sget/userinfo/144312153