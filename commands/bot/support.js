module.exports = {
	name: 'support',
	description: 'Join the support server!',
	run: (client, message, args) => {
	const fetch = require('node-fetch')
	fetch(`https://discord.com/api/v9/channels/${message.channel.id}/messages`, {
    method: "POST",
    body: JSON.stringify({"content":"**Wanna Join The Support Server?**",
        "components": [{
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": "Click Me To Join",
                    "style": 5,
                    "url": "https://discord.gg/4sXHmnDvzy"
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
