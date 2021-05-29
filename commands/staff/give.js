const profileModel = require("../../models/profileSchema");
module.exports = {
    name: "give",
    aliases: [],
    description: "Give a user some coins",
    run: async(client, message, args, profileData) => {
        if(!message.author.id === '198792107408752640') return message.channel.send('Only **Train** can run this command.')
        if (!args.length) return message.channel.send("You need to mention a user to give them coins");
        const amount = args[1];
        const target = message.mentions.users.first();
        if (!target) return message.channel.send("That user does not exist");

        if (amount % 1 != 0 || amount <= 0) return message.channel.send("The amount you are giving must be a whole number");

        try {
            const targetData = await profileModel.findOne({ userID: target.id });
            if (!targetData) return message.channel.send(`This user doens't exist in the db`);

            await profileModel.findOneAndUpdate(
                {
                    userID: target.id,
                },
                {
                    $inc: {
                        coins: amount,
                    },
                }
            );

            return message.channel.send(`This user has been given their coins! You gave them ${amount} coins!`);
        } catch (err) {
            console.log(err);
        }
    },
};