const Discord = require('discord.js');
const { prefix, token, bot_age, bot_info } = require('./config.json');

const client = new Discord.Client();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const fs = require('fs');
client.commands = new Discord.Collection();
// const memberCount = require('./member-count.js')

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command)
	
}

client.once('ready', () => {
	console.log('Ready!');
	// memberCount(client)
});

client.on('message',async message => {
	if (message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

if(!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}

		 if(!message.content.startsWith(prefix) || message.author.bot) return;
});

client.login(token);