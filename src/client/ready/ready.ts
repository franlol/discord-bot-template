import { Client, Constants } from 'discord.js';

const { Events: { CLIENT_READY } } = Constants;

export default (client: Client) => {
  client.on(CLIENT_READY, () => {
    
    // TODO
  });
}
