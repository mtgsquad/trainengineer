const Discord = require("discord.js");

const Color = "#37393e"

module.exports = {
  name: "close",
  aliases: [],
  usage: "close",
  description: "close a ticket",
  run: async (client, message, args) => {





if (!message.channel.name.startsWith(`ticket-`)) {
    const embed8 = new Discord.MessageEmbed()
    .setColor('#37393e')
    .addField(`**You can't use the this outside of a ticket channel.**`)
    message.channel.send({ embed: embed8 });
    return;

}

 const embed9 = new Discord.MessageEmbed()
  .setColor(Color)
  .addFields({name: 'Are you sure you want to close the ticket?', value: 'Respond with confirm if you want to close it.'})
  .setFooter('This will time out in 10 seconds!');

  message.channel.send(embed9)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('**Ticket close timed out, the ticket was not closed.**').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
  }

}

function response(c) {
  while (true) {
    client.on("message", (message) => {
      if(message.channel == c) {
        return message.content;
      }
    });


  }
}



