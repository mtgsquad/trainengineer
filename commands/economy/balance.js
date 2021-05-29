const Discord = require('discord.js');

module.exports = {
    name: 'balance',
    description: 'Check your account balance!',
    cooldown: 3000,
    aliases: ['bal'],
    run: (client, message, args, profileData) => {
        let balEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`)
            .setTitle(`${message.author.tag}'s Balance`)
            .setDescription(`Wallet: ${profileData.coins} coins\nBank: ${profileData.bank} coins`)
            .setColor('#37393e')
            .setTimestamp()
            .setFooter("Train's Engineer")

        message.channel.send(balEmbed)
    }
}