const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const util = require('../util/util.js');

module.exports.run = async (client, message, args) => {
    let author = message.author;
    console.log(args[1]);
    if(args[1]){
        author = util.getUserFromMention(client,args[1]);
    }
    let embed = new Discord.MessageEmbed()
    .setColor(colors.blue)
    .setTitle('User info')
    .setURL('https://discord.js.org/')
    .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
    //.setDescription('Some description here')
    .setThumbnail(`${author.displayAvatarURL()}`)
    .addFields(
        {name: 'User:', value: `${author.username}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Infractions', value: '0'},
        { name: 'Join server at', value: `${message.guild.member(author).joinedAt}`, inline: true },
        { name: 'User create at', value: `${author.createdAt}`, inline: true }
    )
    //.setImage(`${botconfig.guabaicon}`)
    .setTimestamp()
    .setFooter('',  `${botconfig.guabaicon}`);
    message.channel.send(embed);
}
module.exports.config = {
    name: "userinfo",
    description: "Personal info or info of one user",
    accessable: "Members",
    aliases: ["ui","Ui","uI","userInfo"],
    usage: `${botconfig.prefix}userinfo <@user>`
}
