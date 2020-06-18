const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');

module.exports = {
    uinfo: function(cliente, message){
        let embed = new Discord.MessageEmbed()
            .setColor(colors.blue)
            .setTitle('UserInfo')
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
    },
    sInfo: function(cliente, message){
        let embed1 = new Discord.MessageEmbed()
            .setColor(colors.blue)
            .setTitle('UserInfo')
            .setAuthor('guaba BOT', `${botconfig.guabaicon}`, 'https://discord.js.org')
            //.setDescription('Some description here')
            .setThumbnail(`${message.guild.iconURL()}`)
            .addFields(
                {name: 'Server name:', value: `${message.author.username}`, inline: true },
                { name: 'Server Owner:', value: `${message.guild.owner}`, inline: true },
                { name: 'Member count:', value: `${message.guild.memberCount}`, inline: true },
                { name: 'Role aount:', value: `${message.guild.roles}`, inline: true }
            )
        message.channel.send(embed1);
    }
}