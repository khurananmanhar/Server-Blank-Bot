module.exports = {
name: 'create',
description: 'Add Server Template to Your Created Server' ,
execute(message, args){
	if(args.length === 0){
		message.reply('Please Provide A Type of Server')
	}
	message.guild.channels.cache.forEach(channel => channel.delete());
	message.guild.setName(`${message.author.tag}'s ${args[0]} Server'`)
if(args[0] === 'club'){
	message.guild.channels.create('Information', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('Welcome',{parent:cat})
		message.guild.channels.create('Rules',{parent:cat})
		message.guild.channels.create('Announcements',{parent:cat})
		message.guild.channels.create('Meeting Time',{parent:cat})
		message.guild.channels.create('Opportunities',{parent:cat})
	})




	message.guild.channels.create('Text Channels', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('General',{parent:cat})
		message.guild.channels.create('Meeting Talk',{parent:cat})
		message.guild.channels.create('Help',{parent:cat})
		message.guild.channels.create('VC-Text',{parent:cat})
	})



	message.guild.channels.create('Voice Calls', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('General 1',{parent:cat, type:'voice'})
		message.guild.channels.create('General 2',{parent:cat, type:'voice'})
		message.guild.channels.create('Music',{parent:cat, type:'voice'})
	})


	message.guild.channels.create('Misc', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('Music Commands',{parent:cat})
		message.guild.channels.create('Bot Commands',{parent:cat})
	})



}
if(args[0] === 'gaming'){
	message.guild.channels.create('Information', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('Welcome',{parent:cat})
		message.guild.channels.create('Rules',{parent:cat})
		message.guild.channels.create('Announcements',{parent:cat})
		message.guild.channels.create('Support',{parent:cat})
		message.guild.channels.create('Self Roles',{parent:cat})
	})




	message.guild.channels.create('Text Channels', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('General 1',{parent:cat})
		message.guild.channels.create('Games Chat',{parent:cat})
	})



	message.guild.channels.create('Voice Calls', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('General 1',{parent:cat, type:'voice'})
		message.guild.channels.create('General 2',{parent:cat, type:'voice'})
		message.guild.channels.create('General 3',{parent:cat, type:'voice'})
		message.guild.channels.create('Music',{parent:cat, type:'voice'})
		message.guild.channels.create('Gaming 1',{parent:cat, type:'voice'})
		message.guild.channels.create('Gaming 2',{parent:cat, type:'voice'})
		message.guild.channels.create('Gaming 3',{parent:cat, type:'voice'})
	})


	message.guild.channels.create('Misc', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('Music Commands',{parent:cat})
		message.guild.channels.create('Bot Commands',{parent:cat})
		message.guild.channels.create('Memes',{parent:cat})
		message.guild.channels.create('Looking for teammate',{parent:cat})
		message.guild.channels.create('Admin Chat',{parent:cat})
	})



}
if(args[0] === 'friends'){
	message.guild.channels.create('Random Stuff', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('Colour Roles',{parent:cat})
		message.guild.channels.create('Anouncments',{parent:cat})
	})




	message.guild.channels.create('Text Channels', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('General',{parent:cat})
		message.guild.channels.create('Fun Bots 1',{parent:cat})
		message.guild.channels.create('Fun Bots 2',{parent:cat})
		message.guild.channels.create('Music Commands',{parent:cat})
	})



	message.guild.channels.create('Voice Calls', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('General',{parent:cat, type:'voice'})
		message.guild.channels.create('Music',{parent:cat, type:'voice'})
	})



}
if(args[0] === 'creator'){
	message.guild.channels.create('Information', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('Welcome',{parent:cat})
		message.guild.channels.create('Rules',{parent:cat})
		message.guild.channels.create('Announcements',{parent:cat})
		message.guild.channels.create('Streams',{parent:cat})
		message.guild.channels.create('Uploads',{parent:cat})
		message.guild.channels.create('Ask the creator',{parent:cat})
		message.guild.channels.create('Creators Socials',{parent:cat})
	})




	message.guild.channels.create('Text Channels', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('General 1',{parent:cat})
		message.guild.channels.create('General 2',{parent:cat})
		message.guild.channels.create('Content Talk',{parent:cat})
		message.guild.channels.create('Spam',{parent:cat})
		message.guild.channels.create('Media',{parent:cat})
		message.guild.channels.create('Bot Commands',{parent:cat})
		message.guild.channels.create('Self Promo',{parent:cat})
	})



	message.guild.channels.create('Voice Calls', { type: 'category' })
	.then(cat => {
		message.guild.channels.create('General 1',{parent:cat, type:'voice'})
		message.guild.channels.create('General 2',{parent:cat, type:'voice'})
		message.guild.channels.create('General 3',{parent:cat, type:'voice'})
		message.guild.channels.create('General 4',{parent:cat, type:'voice'})
		message.guild.channels.create('Music 1',{parent:cat, type:'voice'})
		message.guild.channels.create('Music 2',{parent:cat, type:'voice'})
	})


}
}
};
//message.guild.channels.create('Announcements'),{ parent: message.channels.cache.get("Information") }