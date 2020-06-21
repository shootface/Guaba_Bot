const botconfig = require("./botconfig.json");
const colors = require("./colors.json");
const Discord = require('discord.js');
const client = new Discord.Client(); //Bot client
const PREFIX = botconfig.prefix; 
//Commands
const cinfo = require('./commands/info');
const cmusic = require('./commands/music');
const fs = require('fs');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands/',(err,files) => {
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        return console.log("[LOGS] Can't load the file")
    }
    jsfile.forEach((f,i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name,pull)
        pull.config.aliases.forEach(alias => {
            client.alias.set(alias,pull.config.name)
        });
    });
});

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



