module.exports = {
	name: 'invite',
	description: 'The Invite Command.',
	run: (client, message, args) => {
	const fetch = require('node-fetch')
	fetch(`https://discord.com/api/v9/channels/${message.channel.id}/messages`, {
    method: "POST",
    body: JSON.stringify({"content":"**Invite Trains Engineer To Your Server!**",
        "components": [{
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "Click Me To Add Me To Your Server",
                    "style": 5,
                    "url": "http://gg.gg/trainengineer"
                }
            ]

        }]}),
    headers: {
        "Authorization": `Bot ${client.token}`,
        "Content-Type": "application/json"
    }
}).then(res => res.json());
	},
};
