const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const adminChannelID = "1286636004110893099"

client.login(token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.channel.id === adminChannelID) {
        try {
            console.log(message.content);
            const targetChannel = await client.channels.fetch("1286625338872303698");
            if (targetChannel) {
                await targetChannel.send(message.content);
            }
        } catch (error) {
            console.error("Error fetching the channel or sending the message:", error);
        }
    }
});
