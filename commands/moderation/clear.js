const Discord = require("discord.js");

const Color = "#37393e"
const red = "#ff04a9"


module.exports = {
  name: "clear",
  aliases: [],
  usage: "clear <amount>",
  description: "clear chat",
  run: async (client, message, args) => {

	if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have the **Manage Messages** permssion which is required to run this command.');

const embed1 = new Discord.MessageEmbed()
.setColor(red)
.setDescription("Please enter a number between 1 and 100")



const embed2 = new Discord.MessageEmbed()
.setColor('#37393e')
.setDescription("Sorry, I could not clear the messages")


const embed3 = new Discord.MessageEmbed()
.setColor(Color)
.setDescription("Messages Cleared")




if (!args[0]) return message.channel.send(embed1)

const deleteCount = parseInt(args[0], 10);


if (!deleteCount || deleteCount < 1 || deleteCount > 100) return message.channel.send(embed1);

message.channel.bulkDelete(deleteCount + 1).catch(error => message.channel.send(embed2));

message.channel.send(embed3)


  }
}