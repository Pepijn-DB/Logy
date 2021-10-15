// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token, guildId, clientId, guild  } = require('./config.json');


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'test') {
		await interaction.reply({ content: 'Testing Completed', ephemeral: true });
		

	} else if (commandName === 'ping') {
		await interaction.reply({ content: `Websocket heartbeat: ${client.ws.ping}ms.`, ephemeral: true });

	} else if (commandName === 'emojitest') {
		const message = await interaction.reply({ content: 'Emoji test', fetchReply: true });
		message.react('872202924296667178');


	}

	
});


// Login to Discord with your client's token
client.login(token);

