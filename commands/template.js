const Discord = require('discord.js');

module.exports = {
name: 'template',
description: 'What Are The Different Templates' ,
execute(message, args){
	const info = new Discord.MessageEmbed()
	.setColor('#94a4d6')
	.setTitle('Template Info')
	.setThumbnail('https://media.discordapp.net/attachments/852999147849383956/853331089372217344/Robot_1.png?width=636&height=636')
	.addFields(
		{
			name:'Club',
			value:'The Perfect Server Fot Club'+ '\n'
		},
			{
			name:'Gaming',
			value:"The Superb Server For Gamers"  + '\n'
		},
		{
			name:'Friends',
			value:"The Perfect Server For Your Friends" + '\n'
		},
		{
			name:'Content Creators',
			value:"The Perfect Server For All Content Creators" + '\n'
		}
	)
	message.channel.send(info)
}
};