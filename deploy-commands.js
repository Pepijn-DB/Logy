const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [

    new SlashCommandBuilder().setName('test').setDescription('This is a command to test if the bot works!	[TEST SERVER ONLY]'),

    new SlashCommandBuilder().setName('ban').setDescription('Ban the user	[TEST SERVER ONLY]'),

	new SlashCommandBuilder().setName('emojitest').setDescription('A test	[TEST SERVER ONLY]'),

	new SlashCommandBuilder() 
	.setName('threadcreate')
	.setDescription('Replies with your input!')
	.addStringOption(tname =>
		tname.setName('ThreadName')
			.setDescription('A name for the thread')
			.setRequired(true))
	.addStringOption(treason =>
		treason.setName('ThreadReason')
			.setDescription('A reason for the thread')
			.setRequired(true))
			
	
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);