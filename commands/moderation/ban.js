const Discord = require("discord.js");

const Color = "#37393e"

module.exports = {
  name: "ban",
  aliases: [],
  usage: "<member>",
  description: "ban a member",
  run: async (client, message, args) => {





       if(!message.member.hasPermission('BAN_MEMBERS')) {

          const BanPerms = new Discord.MessageEmbed()
          .setColor(Color)
          .setDescription('**You Do Not Have Permission To Do That!**')




            message.channel.send(BanPerms);
            return;
        };





        
        let mentionMemberBan = message.mentions.members.first();
        
        if(!mentionMemberBan) {

          const Banmention = new Discord.MessageEmbed()
          .setColor(Color)
          .setDescription('**You Need To Mention A Member!**')






            message.channel.send(Banmention);
            return;
        }

        








        
        if(!mentionMemberBan.kickable) {

          const BanbotPerms = new Discord.MessageEmbed()
          .setColor(color)
          .setDescription('**I Do Not Have Permission To Ban That Member!**')



            message.channel.send(BanbotPerms);
            return
        };






        
        mentionMemberBan.ban()
            .then(() => console.log(`Banned ${mentionMemberBan.displayName}`))


            const BanWork = new Discord.MessageEmbed()
            .setDescription('**Member Banned!**')
            .setColor(Color)
            





            message.channel.send(BanWork)
            .catch(console.error);

  } 
  }                         