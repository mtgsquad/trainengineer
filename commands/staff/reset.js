const profileModel = require('../../models/profileSchema');

module.exports = {
    name: 'reset',
    description: 'Reset the amount of coins a user has!',
    usage: '<@user>',
    run: async(client, message, args, profileData) => {
        if(!message.author.id === '198792107408752640') return message.channel.send('Only **Train** can run this command.')

        let resetUser = message.mentions.users.first();

        if(!resetUser) return message.channel.send('Mention Someone So I Can Reset Their Balance.')

        try{
            await profileModel.findOneAndUpdate(
                {
                    userID: resetUser.id,
                },
                {
                    $inc: {
                        coins: '500',
                    },
                }
            )
        }catch(err){
            console.log(err)
        }

        message.channel.send(`I successfully reset ${resetUser}'s Balance`);
    },
}