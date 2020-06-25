const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(message.author.id != botconfig.ownerid) return message.channel.send("You're not my master. Got out bitch")
    if(!args[1]) return message.channel.send("Please provide a reload command")
    let commandName = args[1].toLowerCase();
    try{
        delete require.cache[require.resolve(`./${commandName}.js`)]
        client.commands.delete(commandName);
        const pull = require(`./${commandName}.js`);
        client.commands.set(commandName,pull);
    }catch(e){
        return message.channel.send(`Could not reload: \`${args[1].toUpperCase()}\``)
    }
    message.channel.send(`The command \`${args[1].toUpperCase()} has benn reloaded`);
}
module.exports.config = {
    name: "reload",
    description: "reloads a bot command!",
    aliases: [],
    accessable: "Administrator",
    usage: `${botconfig.prefix}reload`
}