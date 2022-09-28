    /**********************************************************
     * @INFO  [TABLA DE CONTENIDO]
     * 1  colocar datos en ./dash.json
     * 
     *   BOT CODED BY: Luis Misaki#4165 | https://team.arcades.ga/discord
     *********************************************************/

    const express = require("express");
    const url = require("url");
    const path = require("path");
    const Discord = require("discord.js");
    const ejs = require("ejs");
    const passort = require("passport");
    const bodyParser = require("body-parser");
    const Strategy = require("passport-discord").Strategy;
    const BotConfig = require("../config.json");
    const Settings = require("./dash.json");
    const passport = require("passport");

    module.exports = client => {
    /**********************************************************
     * backend de la web
     *********************************************************/
    const app = express();
    const session = require("express-session");
    const MemoryStore = require("memorystore")(session);


    /**********************************************************
     * incio de session con discord
     *********************************************************/
    passport.serializeUser((user, done) => done(null, user))
    passport.deserializeUser((obj, done) => done(null, obj))
    passport.use(new Strategy({
        clientID: Settings.config.clientID,
        clientSecret: process.env.secret || Settings.config.secret,
        callbackURL: Settings.config.callback,
        scope: ["identify", "guilds", "guilds.join"]
    },
    (accessToken, refreshToken, profile, done) => {
        process.nextTick(()=>done(null, profile))
    }
    ))

    app.use(session({
        store: new MemoryStore({checkPeriod: 86400000 }),
        secret: `#@%#&^$^$%@$^$&%#$%@#$%$^%&$%^#$%@#$%#E%#%@$FEErfgr3g#%GT%536c53cc6%5%tv%4y4hrgrggrgrgf4n`,
        resave: false,
        saveUninitialized: false
    }))

    /**********************************************************
     * medios
     *********************************************************/
    app.use(passport.initialize());
    app.use(passport.session());

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "./views"));


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));

    /**********************************************************
     * carga todos los archivos css para ejecutar un ruta mejor
     *********************************************************/
    app.use(express.static(path.join(__dirname, "./css")));

    /**********************************************************
     * carga todos los archivos js para ejecutar un ruta mejor
     *********************************************************/
    app.use(express.static(path.join(__dirname, "./js")));

    const checkAuth = (req, res, next) => {
        if(req.isAuthenticated()) return next();
        req.session.backURL = req.url;
        res.redirect("/login");
    }

    app.get("/login", (req, res, next) => {
        if(req.session.backURL){
            req.session.backURL = req.session.backURL
        } else if(req.headers.referer){
            const parsed = url.parse(req.headers.referer);
            if(parsed.hostname == app.locals.domain){
                req.session.backURL = parsed.path
            }
        } else {
            req.session.backURL = "/"
        }
        next();
        }, passport.authenticate("discord", { prompt: "none"})
    );

    /**********************************************************
     * callback para logear
     *********************************************************/
    app.get("/callback", passport.authenticate("discord", { failureRedirect: "/" }), async (req, res) => {
        let banned = false
        if(banned) {
            req.session.destroy()
            res.json({login: false, message: "Estás baneado de la dashboard", logout: true})
            req.logout();
        } else {
            res.redirect("/dashboard")
        }
    });

    app.get("/logout", function(req, res) {
        req.session.destroy(()=>{
            req.logout();
            res.redirect("/");
        })
    })

    app.get("/", (req, res) => {
        res.render("index", {
            req: req,
            user: req.isAuthenticated() ? req.user : null,
            bot: client,
            Permissions: Discord.Permissions,
            botconfig: Settings.website,
            callback: Settings.config.callback,
        })
    })


    app.get("/dashboard", (req, res) => {
        if(!req.isAuthenticated() || !req.user)
        return res.redirect("/?error=" + encodeURIComponent("Inicia sesión primero por favor!"))
        if(!req.user.guilds)
        return res.redirect("/?error=" + encodeURIComponent("No puedes conseguir tus gremios"))
        res.render("dashboard", {
            req: req,
            user: req.isAuthenticated() ? req.user : null,
            bot: client,
            Permissions: Discord.Permissions,
            botconfig: Settings.website,
            callback: Settings.config.callback,
        })
    })

    /**********************************************************
     * discord server
     *********************************************************/
    app.get("/discord", (req, res) => {
        res.redirect(`${Settings.website.support}`)
    });

    /**********************************************************
     * incitacion
     *********************************************************/
    app.get("/invite", (req, res) => {
        res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${Settings.config.clientID}&permissions=8&scope=bot%20applications.commands`)
    });

    app.get("/dashboard/:guildID", checkAuth, async (req, res) => {
        const guild = client.guilds.cache.get(req.params.guildID)
        if(!guild)
        return res.redirect("/?error=" + encodeURIComponent("Todavía no estoy en este gremio, ¡agrégueme antes!"))
        let member = guild.members.cache.get(req.user.id);
        if(!member) {
            try{
                member = await guild.members.fetch(req.user.id);
            } catch{

            }
        }
        if(!member)
        return res.redirect("/?error=" + encodeURIComponent("Inicia sesión primero por favor! / ¡Únete al gremio de nuevo!"))
        if(!member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD))
        return res.redirect("/?error=" + encodeURIComponent("no tienes permitido hacer eso"))
        client.settings.ensure(guild.id, {
            prefix: BotConfig.prefix,
            holamundo: "Hola como estas :)",
        });
        res.render("settings", {
            req: req,
            user: req.isAuthenticated() ? req.user : null,
            guild: guild,
            bot: client,
            Permissions: Discord.Permissions,
            botconfig: Settings.website,
            callback: Settings.config.callback,
        })
    })

    app.post("/dashboard/:guildID", checkAuth, async (req, res) => {
        const guild = client.guilds.cache.get(req.params.guildID)
        if(!guild)
        return res.redirect("/?error=" + encodeURIComponent("Todavía no estoy en este gremio, ¡agrégueme antes!"))
        let member = guild.members.cache.get(req.user.id);
        if(!member) {
            try{
                member = await guild.members.fetch(req.user.id);
            } catch{

            }
        }
        if(!member)
        return res.redirect("/?error=" + encodeURIComponent("Inicia sesión primero por favor! / ¡Únete al gremio de nuevo!"))
        if(!member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD))
        return res.redirect("/?error=" + encodeURIComponent("no tienes permitido hacer eso"))
        client.settings.ensure(guild.id, {
            prefix: BotConfig.prefix,
            holamundo: "Hola como estas :)",
        });
        if(req.body.prefix) client.settings.set(guild.id, req.body.prefix, "prefix");
        if(req.body.holamundo) client.settings.set(guild.id, req.body.holamundo, "holamundo");
        res.render("settings", {
            req: req,
            user: req.isAuthenticated() ? req.user : null,
            guild: guild,
            bot: client,
            Permissions: Discord.Permissions,
            botconfig: Settings.website,
            callback: Settings.config.callback,
        })
    })

    /**********************************************************
     * 404
     *********************************************************/
    app.get("*", (req, res) => {
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        if (fullUrl == Settings.website.domain || fullUrl == Settings.website.domain || fullUrl == Settings.website.domain || fullUrl == Settings.website.domain ) {
            res.redirect("index.ejs");
        } else {
            res.redirect("/");
        }
    });

    /**********************************************************
     * inciar la dashboard
     *********************************************************/
    const http = require("http").createServer(app);
    http.listen(Settings.config.port, () => {
        console.log(`El sitio web está en línea en el puerto: ${Settings.config.port}, ${Settings.website.domain}`);
    });

}