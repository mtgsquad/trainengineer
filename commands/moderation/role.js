const { MessageEmbed } = require("discord.js");
const config = require('../../config.json');
module.exports = {
  name: "role",
  description: "A role utility command",
  run: async (client, message, args) => {
    client.prefix = config.prefix;

    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You do not have admin, ${message.author.username}`
      );
    if (args[0] == "create") {
      let rName = message.content.split(`${client.prefix}role create `).join("");
      let rColor;
      args.forEach((arg) => {
        if (arg.startsWith("#")) {
          rColor = arg;
        }
      });
      if (!rName) {
        return message.channel.send(
          `You did not specify a name for your role!`
        );
      }
      if (!rColor) {
        return message.channel.send(
          `You did not specify a color for your role!`
        );
      }
      if (rColor >= 16777215)
        return message.channel.send(
          `That hex color range was too big! Keep it between 0 and 16777215`
        );
      if (rColor <= 0)
        return message.channel.send(
          `That hex color range was too small! Keep it between 0 and 16777215`
        );
      rName = rName.replace(`${rColor}`, ``);
      let rNew = await message.guild.roles.create({
        data: {
          name: rName,
          color: rColor,
        },
      });
      const Embed = new MessageEmbed()
        .setTitle(`New role!`)
        .setDescription(
          `${message.author.username} has created the role "${rName}"\nIts Hex Color Code: ${rColor}\nIts ID: ${rNew.id}`
        )
        .setColor(rColor);
      message.channel.send(Embed);
    } else if (args[0] == "delete") {
      let roleDelete =
        message.guild.roles.cache.get(args[1]) ||
        message.guild.roles.cache.find((r) => r.name == args[1]);
      if (!roleDelete)
        return message.channel.send(
          `You did not specify the name or id of the role you wish to delete!`
        );
      roleDelete.delete();
      const Embed1 = new MessageEmbed()
        .setTitle(`Deleted role!`)
        .setColor(roleDelete.color)
        .setDescription(
          `${message.author.username} has deleted the role "${roleDelete.name}"\nIts ID: ${roleDelete.id}\nIts Hex Color Code: ${roleDelete.color}`
        );
      message.channel.send(Embed1);
    }
  },
};