const botconfig = require("./botconfig.json");
const colors = require("./colors.json");
const Discord = require('discord.js');
const client = new Discord.Client(); //Bot client
const PREFIX = botconfig.prefix; 
//Commands
const cinfo = require('./commands/info');
const cmusic = require('./commands/music');


var servers = {}

client.on('ready',()=>{
    console.log(`Bot is ready as ${client.user.tag}!`);
});

client.on('message',message => {
    //console.log(message.content);
    //console.log(client.user.presence.status);
    //if(message.content.includes('w!search'));
    let args = message.content.substring(PREFIX.length).split(" ");
    let voiceChannel;
    switch(args[0]) {
        case 'play':
            cmusic.mPlay(client,message,args);
        break;
        case 'userInfo':
            cinfo.uinfo(client,message);
        break;
        case 'serverInfo':
            cinfo.sInfo(client,message);
        break;
    }
});

//console.log(botconfig.token);
client.login(botconfig.token);



