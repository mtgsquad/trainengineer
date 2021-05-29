const profileModel = require("../../models/profileSchema");

module.exports = {
    name: "beg",
    aliases: [],
    cooldown: 180000,
    description: "Beg for coins!",
    run: async(client, message, args, profileData) => {
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const response = await profileModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $inc: {
                    coins: randomNumber,
                },
            }
        );
        return message.channel.send(`${message.author}, you begged and received **${randomNumber} coins!**`);
    },
};