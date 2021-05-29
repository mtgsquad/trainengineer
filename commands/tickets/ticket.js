const Discord = require("discord.js");

const Color = "#f59cd7"
const red = "#37393e"

module.exports = {
  name: "ticket",
  aliases: [],
  usage: "ticket",
  description: "Create A Ticket!",
  run: async (client, message, args) => {


let channel = message.guild.channels.cache.find(channel => channel.name === "ticket-" + message.author.username);


  let role = message.guild.roles.cache.find(r => r.name === "Support")

  if(!role) return message.channel.send('There is no **Support** role, people who have this role will be allowed access to the tickets, please contact an administrator to create the role.');


if (!channel) {
 




message.delete();








message.guild.channels.create(`ticket - ${message.author.id}`, {
  type: 'text',
  permissionOverwrites: [
     {
       id: message.author.id,
       allow: ['VIEW_CHANNEL'],
    },
    {
      id: message.guild.id,
      deny: ['VIEW_CHANNEL'],
    }
  ],
}).then(c => {




const embed3 = new Discord.MessageEmbed()
.setColor(Color)
        .addField(`**Hey ${message.author.tag}!**`, `**Our support team will message you when they can!**`)
        .setTimestamp();
        c.send({ embed: embed3 });
    

})
  } else {
    const embed1 = new Discord.MessageEmbed()
    .setColor(red)
    .addField(`Ticket Bot`, `You already have a ticket open.`)
    message.channel.send({ embed: embed1 }).then(message => {
    message.delete({ timeout: 600000 });
    return;
  })
  }





  }
}