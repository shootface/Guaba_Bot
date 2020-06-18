const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
    mPlay: function(cliente,message,args){
        //console.log(message.member.voice.channel.name);
        if(!args[1]){
            message.channel.send(`${message.author} you need to provide a link o name, dont be stupid`);
            return;
        }
        if(!message.member.voice.channel){
            message.channel.send(`${message.author} you must be in a voiceChannel`);
            return;
        }
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }
        var server = servers[message.guild.id];
        if(!message.guild.voiceConnection) message.member.voice.channel.join().then(function(conection){
            play(conection,message);
        })
    }
}