const botconfig = require("../botconfig.json");
const colors = require("../colors.json");
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(message.author.id != botconfig.ownerid) return message.channel.send("You're not my master. Got out bitch")
    try{
        await message.channel.send("Bye dummies. See you soon")
        process.exit();
    }catch(e){
        message.channel.send(`${e.message}`);
    }
}
module.exports.config = {
    name: "shutdown",
    description: "shuts down the bot!",
    aliases: [],
    accessable: "Administrator",
    usage: `${botconfig.prefix}shutdown`
} 