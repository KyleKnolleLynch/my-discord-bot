const { Client, MessageAttachment } = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new Client();

//  initialize giphy
const GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(giphyToken);

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
    let attachment = new MessageAttachment(
      './images/kirk_and_mccoy_concur.gif'
    );
    message.channel.send(attachment);
  } else if (message.content === `${prefix}winning`) {
    giphy
      .search('gifs', { q: 'winning' })
      .then((res) => {
        const resTotal = res.data.length;
        const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
        const resFinal = res.data[resIndex];
        message.channel.send({ files: [resFinal.images.fixed_height.url] });
      })
      .catch((err) => console.log(err));
  } else if (message.content === `${prefix}sad`) {
    giphy
      .search('gifs', { q: 'fall' })
      .then((res) => {
        const resTotal = res.data.length;
        const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
        const resFinal = res.data[resIndex];
        message.channel.send({ files: [resFinal.images.fixed_height.url] });
      })
      .catch((err) => console.log(err));
  } else if (message.content === `${prefix}happy`) {
    giphy
      .search('gifs', { q: 'jump' })
      .then((res) => {
        const resTotal = res.data.length;
        const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
        const resFinal = res.data[resIndex];

        message.channel.send({ files: [resFinal.images.fixed_height.url] });
      })
      .catch((err) => console.log(err));
  }
});

client.login(token);
