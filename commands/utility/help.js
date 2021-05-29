let { prefix } = require('../../config.json');

module.exports = {
  name: "help",
  aliases: ["h"],
  usage: "help",
  description: "Find out what's new with the bot",
  run: async (client, message, args) => {
        let { MessageEmbed } = require("discord.js");
	let { readdirSync } = require("fs");
	let { prefix } = require('../../config.json')
	
		let roleColor = '#37393e'
		  message.guild.me.displayHexColor === "#000000"
			? "#ffffff"
			: message.guild.me.displayHexColor;
	
		if (!args[0]) {
		  let categories = [];
	
		  readdirSync("./commands/").forEach((dir) => {
			if (dir == 'staff') return
			let commands = readdirSync(`./commands/${dir}/`).filter((file) =>
			  file.endsWith(".js")
			);
	
			let cmds = commands.map((command) => {
			  let file = require(`../../commands/${dir}/${command}`);
	
			  if (!file.name) return "No command name.";
	
			  let name = file.name.replace(".js", "");
	
			  return `\`${name}\``;
			});
	
			let data = new Object();
	
			data = {
			  name: dir.toUpperCase(),
			  value: cmds.length === 0 ? "In progress." : cmds.join(" "),
			};
	
			categories.push(data);
		  });
	
		  let embed = new MessageEmbed()
			.setTitle("📬 Need help? Here are all of my commands:")
			.addFields(categories)
			.setDescription(
			  `Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ping\`.`
			)
			.setFooter(
			  `Requested by ${message.author.tag} - Train's Engineer - Made By MTGSquad#6149`,
			  message.author.displayAvatarURL({ dynamic: true })
			)
			.setTimestamp()
			.setColor(roleColor);
		  return message.channel.send(embed);
		} else {
		  let command = client.commands.get(args[0].toLowerCase()) || client.commands.find((c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
			);
			
			if (!command) {
			  command = client.categories.get(args[0].toLowerCase())
			  if (!command) {
				let embed = new MessageEmbed()
				  .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
				  .setColor("#e99df1");
				return message.channel.send(embed);
			  }
			  let embed = new MessageEmbed()
			  .setColor('#e99df1')
			  .setTitle('Command Catagory:')
			  .addFields(
				{name: `Catagory Name`, value: command.name},
				{name: `Amount Of Commands`, value: command.cmdAmount},
			  )
			  return message.channel.send(embed)
			}
	
		  let embed = new MessageEmbed()
		  	.setColor('#e99df1')
			.setTitle("Command Details:")
			.addField(
			  "COMMAND:",
			  command.name ? `\`${command.name}\`` : "No name for this command."
			)
			.addField(
			  "ALIASES:",
			  command.aliases
				? `\`${command.aliases.join("` `")}\``
				: "No aliases Provided."
			)
			.addField(
			  "USAGE:",
			  command.usage
				? `\`${prefix}${command.name} ${command.usage}\``
				: `\`${prefix}${command.name}\``
			)
			.addField(
			  "DESCRIPTION:",
			  command.description
				? command.description
				: "No description Provided."
			)
			.setFooter(
			  `Requested by ${message.author.tag} - Samari`,
			  message.author.displayAvatarURL({ dynamic: true })
			)
			.setTimestamp()
			.setColor(roleColor);
		  return message.channel.send(embed); 
  }

}
}