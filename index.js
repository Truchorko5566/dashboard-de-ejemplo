
    /**********************************************************
     * @INFO  [TABLA DE CONTENIDO]
     * 1  Primero ejecutar npm i
     * 2  crear el bot en discord.dev
     * 3  colocar datos en ./config.json y tambine en ./dasboard/dash.json
     * 
     *   BOT CODED BY: Luis Misaki#4165 | https://team.arcades.ga/discord
     *********************************************************/
     const Discord = require("discord.js");
     const config = require(`./config.json`);
     const dash = require(`./dashboard/dash.json`);
     const Enmap = require("enmap");
     const colors = require("colors");
 
     const client = new Discord.Client({
         shards: "auto",
         allowedMentions: { parse: [ ], repliedUser: false, },
         partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
         intents: [ Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, ]
     });
 
 
     /**********************************************************
      * creando la base de datos
      *********************************************************/
     client.settings = new Enmap({ name: "settings",dataDir: "./databases/bot"});
 
     /**********************************************************/
     client.on("messageCreate", (message) => {
         if(!message.guild || message.author.bot) return;
         client.settings.ensure(message.guild.id, {
             prefix: config.prefix,
             holamundo: "Hola como estas :)",
     });
 
     let { prefix, holamundo } = client.settings.get(message.guild.id)
 
     /**********************************************************
      * Obtener argumentos
      *********************************************************/
     let args = message.content.slice(prefix.length).trim().split(" ");
     let cmd = args.shift()?.toLowerCase();
 
     /**********************************************************
      * Ejecucion de cmds
      *********************************************************/
     if(cmd && cmd.length > 0 && message.content.startsWith(prefix)){
             if(cmd == "prefijo"){
                 message.reply(`¡El prefijo actual es \`${prefix}\`!\n**¡Ve al panel para cambiarlo!**\n> ${dash.site.DOMAIN}`).catch(console.error);
             }
             if(cmd == "hola"){
                 message.reply(holamundo).catch(console.error);
             }
         }
     })
 
     /**********************************************************
      * Iniciar dashboard
      *********************************************************/
     client.on("ready", () => {
     require("./dashboard/index.js")(client);
     })
 
     /**********************************************************
      * Iniciar bot
      *********************************************************/
     client.login(process.env.token || config.token)