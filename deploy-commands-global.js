const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
    
    new SlashCommandBuilder().setName('test').setDescription('This is a command to test if the bot works!'),

	new SlashCommandBuilder().setName('ping').setDescription('Gets the bot ping'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(
	Routes.applicationCommands(clientId),
	{ body: commands },
);
(() => console.log('Successfully registered application commands.'));