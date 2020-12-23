import Discord, { Client } from 'discord.js';

import generateMessages from './messages/messages';
import generateOnReady from './ready/ready';

const client: Client = new Discord.Client()

generateMessages(client);
generateOnReady(client);

const initBot = async (): Promise<void> => {
  try {
    await client.login(process.env.DISCORD_TOKEN);

  } catch (err) {
    const error: ErrorEvent = err;

    console.log('Bot Init error.\n', error);
  }
}

export default initBot;
