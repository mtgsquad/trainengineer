const Discord = require('discord.js');

module.exports = {
	name: 'membercount',
	description: 'The MemberCount Command',
	aliases: ['mc'],
	run: (client, message, args) => {
		const membersInServer = message.guild.memberCount;
		const memberEmbed = new Discord.MessageEmbed()
		.setColor('#37393e')
		.setTitle(`${message.guild.name} Has ${membersInServer} members!`)
		.setTimestamp()

		message.channel.send(memberEmbed)
	},
};