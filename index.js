const { Client, MessageAttachment } = require('discord.js');
const { prefix } = require('./config.json');
const client = new Client();

//  initialize giphy
const GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(process.env.GIPHY_TOKEN);

const version = '1.0.0';

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

// client.on('message', (message) => {
//   if (message.content === `${prefix}agree`) {
//     let attachment = new MessageAttachment(
//       './images/kirk_and_mccoy_concur.gif'
//     );
//     message.channel.send(attachment);
//   } else if (message.content === `${prefix}winning`) {
//     giphy
//       .search('gifs', { q: 'winning' })
//       .then((res) => {
//         const resTotal = res.data.length;
//         const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
//         const resFinal = res.data[resIndex];
//         message.channel.send({ files: [resFinal.images.fixed_height.url] });
//       })
//       .catch((err) => console.log(err));
//   } else if (message.content === `${prefix}sad`) {
//     giphy
//       .search('gifs', { q: 'fall' })
//       .then((res) => {
//         const resTotal = res.data.length;
//         const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
//         const resFinal = res.data[resIndex];
//         message.channel.send({ files: [resFinal.images.fixed_height.url] });
//       })
//       .catch((err) => console.log(err));
//   } else if (message.content === `${prefix}happy`) {
//     giphy
//       .search('gifs', { q: 'jump' })
//       .then((res) => {
//         const resTotal = res.data.length;
//         const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
//         const resFinal = res.data[resIndex];

//         message.channel.send({ files: [resFinal.images.fixed_height.url] });
//       })
//       .catch((err) => console.log(err));
//   }
// });

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'args-info':
      if (!args.length) {
        return message.channel.send(
          `You didn't provide any arguments, ${message.author}!`
        );
      }
      message.channel.send(`Command name: ${command}\nArguments: ${args}`);
      break;
    case 'commands':
      message.channel.send(
        'The commands I respond to are: !hello, !happy, !sad, !agree, !winning, !fall, !jump.  Letter case does not matter.'
      );
      break;
    case 'hello':
      message.channel.send(`Hello ${message.author}`);
      break;
    case 'agree':
      let attachment = new MessageAttachment(
        './images/kirk_and_mccoy_concur.gif'
      );
      message.channel.send(attachment);
      break;
    case 'happy':
      giphy
        .search('gifs', { q: 'happy' })
        .then((res) => {
          const resTotal = res.data.length;
          const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
          const resFinal = res.data[resIndex];

          message.channel.send({ files: [resFinal.images.fixed_height.url] });
        })
        .catch((err) => console.log(err));
      break;
    case 'sad':
      giphy
        .search('gifs', { q: 'sad' })
        .then((res) => {
          const resTotal = res.data.length;
          const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
          const resFinal = res.data[resIndex];
          message.channel.send({ files: [resFinal.images.fixed_height.url] });
        })
        .catch((err) => console.log(err));
      break;
    case 'winning':
      giphy
        .search('gifs', { q: 'winning' })
        .then((res) => {
          const resTotal = res.data.length;
          const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
          const resFinal = res.data[resIndex];
          message.channel.send({ files: [resFinal.images.fixed_height.url] });
        })
        .catch((err) => console.log(err));
      break;
    case 'fall':
      giphy
        .search('gifs', { q: 'fall' })
        .then((res) => {
          const resTotal = res.data.length;
          const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
          const resFinal = res.data[resIndex];
          message.channel.send({ files: [resFinal.images.fixed_height.url] });
        })
        .catch((err) => console.log(err));
      break;
    case 'jump':
      giphy
        .search('gifs', { q: 'jump' })
        .then((res) => {
          const resTotal = res.data.length;
          const resIndex = Math.floor(Math.random() * 10 + 1) % resTotal;
          const resFinal = res.data[resIndex];
          message.channel.send({ files: [resFinal.images.fixed_height.url] });
        })
        .catch((err) => console.log(err));
      break;
    case 'info':
      // message.channel.send(`Command name: ${command}\nArguments: ${args}`);
      if (args[0] === 'version') {
        message.channel.send(`Version: ${version}`);
      } else if (args[0] === 'guilds') {
        message.channel.send(`Guilds: ${client.guilds.cache}`)
      }else {
        message.channel.send('Invalid Arguments');
      }
      break;
    default:
      message.channel.send("Sorry, I don't know that command.");
  }
});

client.login(process.env.BOT_TOKEN);
