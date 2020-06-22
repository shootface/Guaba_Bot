const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor(colors.blue)
    .setTitle('User info')
    .setURL('https://discord.js.org/')
    .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
    //.setDescription('Some description here')
    .setThumbnail(`${message.author.displayAvatarURL()}`)
    .addFields(
        {name: 'User:', value: `${message.author.username}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
        { name: 'Infractions', value: '0'},
        { name: 'Join server at', value: `${message.guild.member(message.author).joinedAt}`, inline: true },
        { name: 'User create at', value: `${message.author.createdAt}`, inline: true }
    )
    //.setImage(`${botconfig.guabaicon}`)
    .setTimestamp()
    .setFooter('',  `${botconfig.guabaicon}`);
    message.channel.send(embed);
}
module.exports.config = {
    name: "userinfo",
    aliases: ["ui","Ui","uI","userInfo"]
}


