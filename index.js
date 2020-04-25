const { Client, MessageAttachment } = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Client();

client.on('ready', () => {
  console.log('Connected as ' + client.user.tag);

  // client.user.setActivity('YouTube', { type: 'WATCHING' });

  // client.guilds.cache.forEach((guild) => {
  //   console.log(guild.name);
  //   guild.channels.cache.forEach((channel) => {
  //     console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
  //   });

  //  general text 703655690731782227
  // });

  // let generalChannel = client.channels.cache.get('703655690731782227')
  // const attachment = new MessageAttachment('C:/Users/Kyle/Desktop/kirk_and_mccoy_concur.gif')
  // generalChannel.send(attachment);
  //  "C:\Users\Kyle\Desktop\kirk_and_mccoy_concur.gif"
});

client.on('message', (message) => {
  if (message.content === `${prefix}agree`) {
    const attachment = new MessageAttachment('./images/kirk_and_mccoy_concur.gif');
    message.channel.send(attachment);
  }
});

client.login(token);
