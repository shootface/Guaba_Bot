const reqEvent = (event) => require(`../events/${event}`)
module.exports = client => {
    client.on("ready", function() {reqEvent("ready")(client)});
    client.on("reconnecting", () => reqEvent("reconneting")(client));
    client.on("disconnect", () => reqEvent("disconnet")(client));
    client.on("warn", () => reqEvent("warn")(client));
    client.on("error", () => reqEvent("error")(client));
}