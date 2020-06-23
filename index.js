const botconfig = require("./botconfig.json");
const colors = require("./colors.json");
const Discord = require('discord.js');
const client = new Discord.Client(); //Bot client
const PREFIX = botconfig.prefix; 
const fs = require('fs');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
require('./util/eventHandeler')(client)
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
            client.aliases.set(alias,pull.config.name)
        });
    });
});

client.on('message',message => {
    console.log(message.content);
    let args = message.content.substring(PREFIX.length).split(" ");
    let commandFile = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
    if(commandFile) commandFile.run(client,message,args)
});

//console.log(botconfig.token);
client.login(botconfig.token);



