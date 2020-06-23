const Discord = require('discord.js');

module.exports = client => {
    console.log(`Bot is ready as ${client.user.tag}!`);
    let status = [
        `${client.guilds.cache.size} discord servers`,
        "w!help",
        `over ${client.users.cache.size} users`
    ]
    setInterval(function(){
        let sta = status[Math.floor(Math.random() * status.length)];
        client.user.setActivity(sta, {type: "WATCHING"});
    }, 5000)
}