const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Pinglendi");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
         console.log(`${client.user.username} ismi ile giriş yaptım!`);
});
    let sent = [];
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    

    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let wastyy = await data.get(msg.author.id)
        
        if (wastyy === 1) {
        } else {
          
          if(sent.includes(msg.author.id)) return;
          sent.push(msg.author.id)
           msg.channel.startTyping();
          await sleep(5500)
          
          await msg.channel.send("")
          await msg.channel.stopTyping();
          await sleep(7000)
          msg.channel.startTyping();
          await msg.channel.send("") 
          await msg.channel.stopTyping();
          
          
      }
      }
    }
  }
})


client.on("guildCreate", EmirhanYerlikaya => {

  });


client.on("ready", () => {
      setInterval(() => {
     let EmirhanYerlikaya = client.channels.cache.get("874347225088671767") //OwO Botun oldugu sunucunun mesaj yazılacak kanal id'si


       EmirhanYerlikaya.send("owoh")



      }, 20000);
})

client.on("ready", () => {
      setInterval(() => {
       let EmirhanYerlikaya = client.channels.cache.get("874347225088671767") //OwO Botun oldugu sunucunun mesaj yazılacak kanal id'si


       EmirhanYerlikaya.send("owoh")



      }, 40000);
})

client.on("ready", () => {
      setInterval(() => {
       let EmirhanYerlikaya = client.channels.cache.get("874347225088671767") //OwO Botun oldugu sunucunun mesaj yazılacak kanal id'si


       EmirhanYerlikaya.send("owoh")



      }, 60000);
})

client.on("ready", () => {
      setInterval(() => {
     let EmirhanYerlikaya = client.channels.cache.get("874347225088671767") //OwO Botun oldugu sunucunun mesaj yazılacak kanal id'si


       EmirhanYerlikaya.send("owoh")



      }, 80000);
})

client.on("ready", () => {
      setInterval(() => {
    let EmirhanYerlikaya = client.channels.cache.get("874347225088671767") //OwO Botun oldugu sunucunun mesaj yazılacak kanal id'si


       EmirhanYerlikaya.send("owo sell all")


      }, 90000);
})


client.login(process.env.token);

//oynuyor kısmı
const bot = new Discord.Client();

var oyun = [
`Owo`,
``,
``
]
  
client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "PLAYING"});

        }, 2 * 8000);
});


