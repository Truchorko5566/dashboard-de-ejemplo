const Discord = require("discord.js");
const config = require(`./config.json`);
const dash = require(`./dashboard/dash.json`);
const colors = require("colors");
const Enmap = require("enmap");

const client = new Discord.Client({
    shards: "auto",
    allowedMentions: { parse: [ ], repliedUser: false, },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [ Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, ]
});
//base de datos enmap
client.settings = new Enmap({ name: "settings",dataDir: "./databases/bot"});
//creacion de respuestas
client.on("messageCreate", (message) => {
    if(!message.guild || message.author.bot) return;
    client.settings.ensure(message.guild.id, {
        prefix: config.prefix,
        holamundo: "Hola como estas :)",
});
    //Obtener la configuración
    let { prefix, holamundo } = client.settings.get(message.guild.id)

    //Obtener los argumentos
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift()?.toLowerCase();

   //Si hay un comando, ejecutarlo
    if(cmd && cmd.length > 0 && message.content.startsWith(prefix)){
        if(cmd == "prefijo"){
            message.reply(`¡El prefijo actual es \`${prefix}\`!\n**¡Ve al panel para cambiarlo!**\n> ${dash.website.domain}`).catch(console.error);
        }
        if(cmd == "hola"){
            message.reply(holamundo).catch(console.error);
        }
    }
})

//dashboard
client.on("ready", () => {
   require("./dashboard/index.js")(client);
})

//iniciar bot
client.login(process.env.token || config.token)
